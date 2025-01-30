import React, { useState } from "react";
import logo from "../../public/images/EasyGasLogo.png";
import anicar from "../../public/images/anicar.jpg";
import products from "../../datas/products.json";
import catagory from "../../datas/catagory.json";

const Easygas = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Tanlangan kategoriya
  const [selectedProduct, setSelectedProduct] = useState(null); // Tanlangan mahsulot

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Tanlangan kategoriyani o'rnatish
    setSelectedProduct(null); // Har safar kategoriya o'zgarsa mahsulotni tozalash
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Tanlangan mahsulotni o'rnatish
  };

  return (
    <>
      <section className="page3">
        <div className="bg-[#1372F8] flex items-start justify-center pt-4 pb-3 rounded-b-3xl">
          <img
            className="white-logo"
            src={logo}
            alt="photo error"
            width={50}
            height={50}
          />
          <h1 className="news-title ms-1 pt-3 text-white text-xl font-semibold">
            Easy Gas
          </h1>
        </div>
        <div className="container mx-auto px-3">
          <div className="page-inner">
            <h3 className="branch-title pt-3 ps-2 text-lg font-bold">Audi R5</h3>
            <img
              className="ani-car px-5 w-full mt-3 rounded-lg shadow-lg"
              src={anicar}
              alt="car"
            />
          </div>
          <h3 className="branch-title pt-5 pb-3 ps-2 text-lg font-bold">
            Категории
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {catagory.map((c) => (
              <div
                key={c.id}
                className={`p-3 border rounded-lg shadow-sm cursor-pointer transition-transform transform hover:scale-105 ${
                  selectedCategory?.catagory === c.catagory
                    ? "bg-blue-100 border-blue-500"
                    : "bg-white"
                }`}
                onClick={() => handleCategoryClick(c)}
              >
                <img
                  className="brend-image w-full h-24 object-cover rounded-md"
                  src={`http://admin.stag.uz/storage/${c.image}`}
                  alt="Brend"
                />
                <span className="text-sm block text-center mt-2">{c.name}</span>
              </div>
            ))}
          </div>

          {selectedCategory ? (
            <>
              <h3 className="branch-title pt-5 pb-3 ps-2 text-lg font-bold">
                {selectedCategory.name} — Товары
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {products
                  .filter(
                    (p) => p.product_category_id === selectedCategory.catagory
                  )
                  .map((product) => (
                    <div
                      key={product.id}
                      className="p-3 border rounded-lg shadow-sm cursor-pointer transition-transform transform hover:scale-105"
                      onClick={() => handleProductClick(product)}
                    >
                      <img
                        className="w-full h-32 object-cover rounded-md"
                        src={`http://admin.stag.uz/storage/${product.image}`}
                        alt={product.name}
                      />
                      <span className="text-sm block text-center mt-2">
                        {product.name}
                      </span>
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <p className="text-center text-gray-600 mt-3">
              Пожалуйста, выберите категорию.
            </p>
          )}

          {selectedProduct && (
            <div className="product-details mt-5 p-5 border rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{selectedProduct.title}</h3>
              <img
                className="product-detail-image mt-3 w-full h-48 object-cover rounded-md"
                src={`http://admin.stag.uz/storage/${selectedProduct.image}`}
                alt={selectedProduct.name}
              />
              <p className="mt-3 text-gray-700">{selectedProduct.description}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Easygas;



// import React, { useState } from "react";
// import logo from "../../public/images/EasyGasLogo.png";
// import anicar from "../../public/images/anicar.jpg";
// import products from "../../datas/products.json";
// import catagory from "../../datas/catagory.json";

// const Easygas = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null); // Tanlangan mahsulot
//   const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0); // Kategoriya ko'rsatilayotgan qismi

//   const itemsPerPage = 4; // Har sahifada 4 ta kategoriya

//   const handleProductClick = (product) => {
//     setSelectedProduct(product); // Tanlangan mahsulotni o'rnatish
//   };

//   const handleBackClick = () => {
//     setSelectedProduct(null); // Tanlangan mahsulotni tozalash
//   };

//   const handleNextClick = () => {
//     // Kategoriyani keyingi sahifaga o'tkazish
//     if (currentCategoryIndex + itemsPerPage < catagory.length) {
//       setCurrentCategoryIndex(currentCategoryIndex + itemsPerPage);
//     }
//   };

//   const handlePrevClick = () => {
//     // Kategoriyani oldingi sahifaga qaytarish
//     if (currentCategoryIndex > 0) {
//       setCurrentCategoryIndex(currentCategoryIndex - itemsPerPage);
//     }
//   };

//   return (
//     <>
//       {!selectedProduct ? (
//         <section className="page3">
//           <div className="bg-[#1372F8] flex items-start justify-center pt-4 pb-3 rounded-b-3xl">
//             <img
//               className="white-logo"
//               src={logo}
//               alt="photo error"
//               width={50}
//               height={50}
//             />
//             <h1 className="news-title ms-1 pt-3 text-white text-xl font-semibold">
//               Easy Gas
//             </h1>
//           </div>
//           <div className="container mx-auto px-3">
//             <div className="page-inner">
//               <h3 className="branch-title pt-3 ps-2 text-lg font-bold">
//                 Audi R5
//               </h3>
//               <img
//                 className="ani-car px-5 w-full mt-3 rounded-lg shadow-lg"
//                 src={anicar}
//                 alt="car"
//               />
//             </div>
//             <h3 className="branch-title pt-5 pb-3 ps-2 text-lg font-bold">
//               Категории
//             </h3>
//             <div className="flex gap-4 overflow-x-auto">
//               {catagory
//                 .slice(currentCategoryIndex, currentCategoryIndex + itemsPerPage)
//                 .map((c) => (
//                   <div
//                     key={c.id}
//                     className="p-3 border rounded-lg shadow-sm cursor-pointer transition-transform transform hover:scale-105 bg-white"
//                   >
//                     <img
//                       className="brend-image w-28 h-24 object-cover rounded-md"
//                       src={`http://admin.stag.uz/storage/${c.image}`}
//                       alt="Brend"
//                     />
//                     <span className="text-sm block text-center mt-2">
//                       {c.name}
//                     </span>
//                   </div>
//                 ))}
//             </div>
//             <div className="flex justify-between mt-4">
//               <button
//                 className={`py-2 px-4 rounded-lg text-white bg-gray-500 ${
//                   currentCategoryIndex === 0 && "opacity-50 cursor-not-allowed"
//                 }`}
//                 onClick={handlePrevClick}
//                 disabled={currentCategoryIndex === 0}
//               >
//                 Oldingi
//               </button>
//               <button
//                 className={`py-2 px-4 rounded-lg text-white bg-blue-500 ${
//                   currentCategoryIndex + itemsPerPage >= catagory.length &&
//                   "opacity-50 cursor-not-allowed"
//                 }`}
//                 onClick={handleNextClick}
//                 disabled={currentCategoryIndex + itemsPerPage >= catagory.length}
//               >
//                 Keyingi
//               </button>
//             </div>
//             <h3 className="branch-title pt-5 pb-3 ps-2 text-lg font-bold">
//               Товары
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               {products.map((product) => (
//                 <div
//                   key={product.id}
//                   className="p-3 border rounded-lg shadow-sm cursor-pointer transition-transform transform hover:scale-105"
//                   onClick={() => handleProductClick(product)}
//                 >
//                   <img
//                     className="w-full h-32 object-cover rounded-md"
//                     src={`http://admin.stag.uz/storage/${product.image}`}
//                     alt={product.name}
//                   />
//                   <span className="text-sm block text-center mt-2">
//                     {product.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       ) : (
//         <section className="product-details mt-5 p-5 border rounded-lg shadow-lg mx-3">
//           <button
//             className="py-2 px-4 mb-4 rounded-lg bg-blue-500 text-white"
//             onClick={handleBackClick}
//           >
//             Ortga qaytish
//           </button>
//           <h3 className="text-xl font-bold">{selectedProduct.title}</h3>
//           <img
//             className="product-detail-image mt-3 w-full h-48 object-cover rounded-md"
//             src={`http://admin.stag.uz/storage/${selectedProduct.image}`}
//             alt={selectedProduct.name}
//           />
//           <p className="mt-3 text-gray-700">{selectedProduct.description}</p>
//         </section>
//       )}
//     </>
//   );
// };

// export default Easygas;
