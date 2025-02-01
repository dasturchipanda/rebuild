import React, { useState, useEffect } from "react";
import databranches from "../../datas/branches.json";
import regionsdata from "../../datas/regions.json";

const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;

  const R = 6371; // Yerning radiusi, km
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Masofa, km
};

const Branches = () => {

  try {
    
  const defaultimage = "/images/default-content-image.png";
  const mapimage = "/images/map.png";

  const regions = regionsdata;
  const branches = databranches;
  const [selectedRegion, setSelectedRegion] = useState(null); // Tanlangan region
  const [selectedBranch, setSelectedBranch] = useState(null); // Tanlangan filial

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    setSelectedBranch(null); // Region tanlanganda filialni tozalash
  };

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
  };

  const handleBackClick = () => {
    if (selectedBranch) {
      setSelectedBranch(null); // Filial tanlangan bo'lsa, uni tozalash
    } else if (selectedRegion) {
      setSelectedRegion(null); // Region tanlangan bo'lsa, uni tozalash
    }
  };

  // Filtrlangan va tartiblangan filiallar
  const filteredBranches = selectedRegion
    ? branches
        .filter((branch) => branch.region_id === selectedRegion.id) // Regionga tegishli filiallarni filtrlash
        .sort((a, b) => {
          // Tartiblash
          const numA = parseInt(a.name.replace("Stag", "").trim(), 10); // "Stag" ni olib tashlab, raqamni olish
          const numB = parseInt(b.name.replace("Stag", "").trim(), 10);
          return numA - numB; // Eng kichikdan eng kattaga
        })
    : [];

  const [userLocation, setUserLocation] = useState(null);
  const [nearbyBranches, setNearbyBranches] = useState([]);
  const [showBranches, setShowBranches] = useState(false);

  const extractCoordinates = (addressLink) => {
    if (!addressLink) return null;
    const match = addressLink.match(/q=(-?\d+\.\d+),(-?\d+\.\d+)/);
    if (match) {
      return { lat: parseFloat(match[1]), lng: parseFloat(match[2]) };
    }
    return null;
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Foydalanuvchi joylashuvini olishda xatolik:", error);
      }
    );
  }, []);

  useEffect(() => {
    if (userLocation) {
      const sortedBranches = branches
        .map((branch) => {
          const coordinates = extractCoordinates(branch.address_link);
          if (!coordinates) return null;

          const distance = calculateDistance(
            userLocation.lat,
            userLocation.lng,
            coordinates.lat,
            coordinates.lng
          );
          return { ...branch, distance };
        })
        .filter(Boolean) // Null qiymatlarni olib tashlaymiz
        .sort((a, b) => a.distance - b.distance) // Masofaga qarab tartiblaymiz
        .slice(0, 5); // Eng yaqin 5 ta filialni olamiz

      setNearbyBranches(sortedBranches);
    }
  }, [userLocation]);

  return (
    <div className="branches mb-[100px]">
      <div className="container mx-auto px-4">
        <h1 className="text-center branch-title my-[34px]">Филиалы</h1>
        <img className="mb-4" src={mapimage} alt="image error" />

        {/* Ortga qaytish tugmasi */}
        {(selectedRegion || selectedBranch) && (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mb-4"
            onClick={handleBackClick}
          >
            Ortga qaytish
          </button>
        )}

        {/* Tanlangan filial */}
        {selectedBranch ? (
          <div className="selected-branch bg-white  rounded shadow">
            <img
              src={
                selectedBranch.image == null
                  ? defaultimage
                  : `http://admin.stag.uz/storage/${selectedBranch.image}`
              }
              alt={selectedBranch.name}
              className="w-[100%] h-[100%] rounded"
            />
            <div className="wrapper-branch px-3 py-2">
              <p>
                <strong>Nom:</strong> {selectedBranch.name}
              </p>
              <p>
                <strong>Tavsif:</strong> {selectedBranch.description}
              </p>
              <p>
                <strong>Manzil:</strong> {selectedBranch.address}
              </p>
              <a
                href={selectedBranch.address_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Manzilni xaritada ko‘rish
              </a>
            </div>
          </div>
        ) : selectedRegion ? (
          // Tanlangan regionga tegishli tartiblangan filiallar
          <div className="filtered-branches mb-[100px]">
            <h2 className="text-lg font-bold mb-4">
              Tanlangan region: {selectedRegion.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredBranches.map((branch) => (
                <button
                  key={branch.id}
                  className="branch-item bg-gray-100 p-4 rounded shadow hover:bg-gray-200"
                  onClick={() => handleBranchClick(branch)}
                >
                  {branch.name}
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Regionlar ro‘yxati
          <div className="regions bg-white rounded-b-[22px] border-gray-700 border-[1px] p-3">
            <h2 className="text-lg font-bold mb-4">Города</h2>
            <div className="flex flex-col">
              {regions.map((region, index) => (
                <button
                  key={region.id}
                  className={`region-item ${
                    index % 2 === 0 ? "stipeB" : "stipeW"
                  }`}
                  onClick={() => handleRegionClick(region)}
                >
                  {region.name}
                </button>
              ))}
            </div>
          </div>
        )}
        {selectedRegion ? (
          ""
        ) : (
          <div className="min-h-[500px] bg-gray-100 p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Eng Yaqin Filiallar</h1>
            <button
              onClick={() => setShowBranches(!showBranches)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              {showBranches ? "Yashirish" : "Eng yaqin filiallarni ko'rish"}
            </button>
            {showBranches && nearbyBranches.length > 0 && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
                {nearbyBranches.map((branch) => (
                  <div
                    key={branch.id}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
                  >
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {branch.name}
                    </h2>
                    <p className="text-gray-600">{branch.description}</p>
                    <p className="text-gray-600 mt-2">
                      Manzil: {branch.address}
                    </p>
                    <p className="text-gray-600">
                      Masofa: {branch.distance.toFixed(2)} km
                    </p>
                    {branch.address_link && (
                      <a
                        href={branch.address_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline mt-2 inline-block"
                      >
                        Xaritada ko'rish
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
            {showBranches && nearbyBranches.length === 0 && (
              <p className="mt-6 text-gray-600 text-center">
                Hozircha filiallar topilmadi.
                <br />
                Brauzer uchun location ga ruxsat berilganini tekshiring.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
  } catch (error) {
    console.error("Branches komponentida xatolik:", error);
    return <div>Xatolik yuz berdi. Iltimos, sahifani qaytadan yangilan yoki o'zingizga kerakli bolgan malumotlarni <a target="_blank"  href="https://t.me/staguz">telegram</a> kanalimizdan olishingiz ham mumkin!</div>;
  }

};

export default Branches;

// import React, { useState, useEffect } from "react";
// import defaultimage from "../../public/images/default-content-image.png";

// const Branches = () => {
//   const [regions, setRegions] = useState([]); // Regionlar
//   const [branches, setBranches] = useState([]); // Filiallar
//   const [selectedRegion, setSelectedRegion] = useState(null); // Tanlangan region
//   const [selectedBranch, setSelectedBranch] = useState(null); // Tanlangan filial

//   // Ma'lumotlarni yuklash uchun async funktsiya
//   const fetchData = async () => {
//     try {
//       // Regionlar va filiallarni API'dan olish
//       const regionsResponse = await fetch("/api/regions");
//       const branchesResponse = await fetch("/api/branches");

//       const regionsData = await regionsResponse.json();
//       const branchesData = await branchesResponse.json();

//       setRegions(regionsData); // Regionlar ma'lumotlarini o'rnatish
//       setBranches(branchesData); // Filiallar ma'lumotlarini o'rnatish
//     } catch (error) {
//       console.error("Ma'lumotlarni yuklashda xatolik yuz berdi:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData(); // Komponent yuklanganda ma'lumotlarni yuklash
//   }, []);

//   const handleRegionClick = (region) => {
//     setSelectedRegion(region);
//     setSelectedBranch(null); // Region tanlanganda filialni tozalash
//   };

//   const handleBranchClick = (branch) => {
//     setSelectedBranch(branch);
//   };

//   const handleBackClick = () => {
//     if (selectedBranch) {
//       setSelectedBranch(null); // Filial tanlangan bo'lsa, uni tozalash
//     } else if (selectedRegion) {
//       setSelectedRegion(null); // Region tanlangan bo'lsa, uni tozalash
//     }
//   };

//   // Filtrlangan va tartiblangan filiallar
//   const filteredBranches = selectedRegion
//     ? branches
//         .filter((branch) => branch.region_id === selectedRegion.id) // Regionga tegishli filiallarni filtrlash
//         .sort((a, b) => {
//           // Tartiblash
//           const numA = parseInt(a.name.replace("Stag", "").trim(), 10);
//           const numB = parseInt(b.name.replace("Stag", "").trim(), 10);
//           return numA - numB; // Eng kichikdan eng kattaga
//         })
//     : [];

//   return (
//     <div className="branches mb-[100px]">
//       <div className="container mx-auto px-4">
//         <h1 className="text-center my-4">Филиалы</h1>

//         {/* Ortga qaytish tugmasi */}
//         {(selectedRegion || selectedBranch) && (
//           <button
//             className="bg-red-500 text-white px-4 py-2 rounded mb-4"
//             onClick={handleBackClick}
//           >
//             Ortga qaytish
//           </button>
//         )}

//         {/* Tanlangan filial */}
//         {selectedBranch ? (
//           <div className="selected-branch bg-white p-4 rounded shadow">
//             <h2 className="text-lg font-bold mb-2">Tanlangan filial:</h2>
//             <p><strong>Nom:</strong> {selectedBranch.name}</p>
//             <p><strong>Tavsif:</strong> {selectedBranch.description}</p>
//             <p><strong>Manzil:</strong> {selectedBranch.address}</p>
//             <a
//               href={selectedBranch.address_link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 underline"
//             >
//               Manzilni xaritada ko‘rish
//             </a>
//             <img
//               src={selectedBranch.image == null ? defaultimage : `http://admin.stag.uz/storage/${selectedBranch.image}`}
//               alt={selectedBranch.name}
//               className="mt-4 w-full rounded"
//             />
//           </div>
//         ) : selectedRegion ? (
//           // Tanlangan regionga tegishli tartiblangan filiallar
//           <div className="filtered-branches">
//             <h2 className="text-lg font-bold mb-4">
//               Tanlangan region: {selectedRegion.name}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {filteredBranches.map((branch) => (
//                 <button
//                   key={branch.id}
//                   className="branch-item bg-gray-100 p-4 rounded shadow hover:bg-gray-200"
//                   onClick={() => handleBranchClick(branch)}
//                 >
//                   {branch.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ) : (
//           // Regionlar ro‘yxati
//           <div className="regions">
//             <h2 className="text-lg font-bold mb-4">Города</h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {regions.map((region) => (
//                 <button
//                   key={region.id}
//                   className="region-item bg-gray-100 p-4 rounded shadow hover:bg-gray-200"
//                   onClick={() => handleRegionClick(region)}
//                 >
//                   {region.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Branches;
