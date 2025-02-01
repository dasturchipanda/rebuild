import React, { useState } from "react";
import logo from "../../public/images/EasyGasLogo.png";
import anicar from "../../public/images/anicar.jpg";
import products from "../../datas/products.json";
import catagory from "../../datas/catagory.json";

const Easygas = () => {
  try {
    const [selectedCategory, setSelectedCategory] = useState(null); // Tanlangan kategoriya
    const [selectedProduct, setSelectedProduct] = useState(null); // Tanlangan mahsulot

    const handleCategoryClick = (category) => {
      setSelectedCategory(category); // Tanlangan kategoriyani o'rnatish
      setSelectedProduct(null); // Har safar kategoriya o'zgarsa mahsulotni tozalash
    };

    const handleProductClick = (product) => {
      setSelectedProduct(product); // Tanlangan mahsulotni o'rnatish
    };

    const handleBackToProducts = () => {
      setSelectedProduct(null); // Mahsulotdan orqaga qaytish
    };

    return (
      <>
        <section className="page3">
          {/* Header */}
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

          <div className="container mx-auto px-3 mb-[100px]">
            {/* Faqat tanlangan mahsulot haqida ma'lumot */}
            {selectedProduct ? (
              <div className="product-details mt-5 p-5 border rounded-lg shadow-lg">
                <button
                  onClick={handleBackToProducts}
                  className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Ortga qaytish
                </button>
                <h3 className="text-xl font-bold">{selectedProduct.title}</h3>
                <img
                  className="product-detail-image mt-3 w-full h-48 object-cover rounded-md"
                  src={`http://admin.stag.uz/storage/${selectedProduct.image}`}
                  alt={selectedProduct.name}
                />
                <p className="mt-3 text-gray-700">
                  {selectedProduct.description}
                </p>
              </div>
            ) : (
              <>
                {/* Kategoriya va mahsulotlar */}
                <div className="page-inner">
                  <h3 className="branch-title pt-3 ps-2 text-lg font-bold">
                    Audi R5
                  </h3>
                  <img
                    className="ani-car px-5 w-full mt-3 rounded-lg shadow-lg"
                    src={anicar}
                    alt="car"
                  />
                </div>

                {/* Kategoriyalar */}
                <h3 className="branch-title pt-5 pb-3 ps-2 text-lg font-bold">
                  Категории
                </h3>
                <div className="otavata w-full overflow-x-auto flex no-scrollbar">
                  {catagory.map((c) => (
                    <div
                      key={c.id}
                      className={`vata p-3 mx-[4px] border rounded-lg shadow-sm cursor-pointer transition-transform transform hover:scale-105 ${
                        selectedCategory?.catagory === c.catagory
                          ? "bg-blue-100 border-blue-500"
                          : "bg-white"
                      }`}
                      onClick={() => handleCategoryClick(c)}
                    >
                      <span className="text-sm block text-center mt-2">
                        {c.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mahsulotlar */}
                {selectedCategory ? (
                  <>
                    <h3 className="branch-title pt-5 pb-3 ps-2 text-lg font-bold">
                      {selectedCategory.name} — Товары
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {products
                        .filter(
                          (p) =>
                            p.product_category_id === selectedCategory.catagory
                        )
                        .map((product) => (
                          <div>
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
                              <span className="text-sm block text-center mb-3 mt-2">
                                {product.name}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </>
                ) : (
                  <p className="text-center text-gray-600 mt-3">
                    Пожалуйста, выберите категорию.
                  </p>
                )}
              </>
            )}
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error("Branches komponentida xatolik:", error);
    return (
      <div>
        Xatolik yuz berdi. Iltimos, sahifani qaytadan yangilan yoki o'zingizga
        kerakli bolgan malumotlarni <a target="_blank"  href="https://t.me/staguz">telegram</a>{" "}
        kanalimizdan olishingiz ham mumkin!
      </div>
    );
  }
};

export default Easygas;
