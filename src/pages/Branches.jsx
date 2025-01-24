import React, { useState } from "react";
import databranches from "../../datas/branches.json";
import regionsdata from "../../datas/regions.json";
import defaultimage from '../../public/images/default-content-image.png'

const Branches = () => {


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

  return (
    <div className="branches mb-[100px]">
      <div className="container mx-auto px-4">
        <h1 className="text-center my-4">Филиалы</h1>

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
          <div className="selected-branch bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">Tanlangan filial:</h2>
            <p><strong>Nom:</strong> {selectedBranch.name}</p>
            <p><strong>Tavsif:</strong> {selectedBranch.description}</p>
            <p><strong>Manzil:</strong> {selectedBranch.address}</p>
            <a
              href={selectedBranch.address_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Manzilni xaritada ko‘rish
            </a>
            <img
              src={selectedBranch.image == null ? defaultimage : `http://admin.stag.uz/storage/${selectedBranch.image}`}
              alt={selectedBranch.name}
              className="mt-4 w-full rounded"
            />
          </div>
        ) : selectedRegion ? (
          // Tanlangan regionga tegishli tartiblangan filiallar
          <div className="filtered-branches">
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
          <div className="regions">
            <h2 className="text-lg font-bold mb-4">Города</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {regions.map((region) => (
                <button
                  key={region.id}
                  className="region-item bg-gray-100 p-4 rounded shadow hover:bg-gray-200"
                  onClick={() => handleRegionClick(region)}
                >
                  {region.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
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
