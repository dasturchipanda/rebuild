import React, { useState } from "react";
import logo from "../../public/images/EasyGasLogo.png";
import anicar from "../../public/images/anicar.jpg";
import products from "../../datas/products.json";
import catagory from "../../datas/catagory.json";

const Easygas = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState([]);
  const [savedProducts, setSavedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");

  // Kategoriya tanlash
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
  };

  // Mahsulotni belgilash
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Liked tugmasi
  const handleLikeProduct = (product) => {
    if (likedProducts.some((p) => p.id === product.id)) {
      // Agar mahsulot allaqachon yoqilgan bo'lsa, uni o'chiramiz
      setLikedProducts((prev) => prev.filter((p) => p.id !== product.id));
    } else {
      // Yangi mahsulotni qo'shamiz
      setLikedProducts((prev) => [...prev, product]);
    }
  };

  // Save tugmasi
  const handleSaveProduct = (product) => {
    if (savedProducts.some((p) => p.id === product.id)) {
      // Agar mahsulot allaqachon yoqilgan bo'lsa, uni o'chiramiz
      setSavedProducts((prev) => prev.filter((p) => p.id !== product.id));
    } else {
      // Yangi mahsulotni qo'shamiz
      setSavedProducts((prev) => [...prev, product]);
    }
  };

  // Sahifani almashtirish
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Mahsulot sahifasi
  const renderProductsPage = (products, showActions = true) => (
    <div className="grid grid-cols-2 gap-4 mt-5">
      {products.map((product) => {
        const isLiked = likedProducts.some((p) => p.id === product.id);
        const isSave = savedProducts.some((p) => p.id === product.id);
        return (
          <div key={product.id} className="p-3 border rounded-lg shadow-sm">
            <img
              className="w-full h-32 object-cover rounded-md"
              src={`http://admin.stag.uz/storage/${product.image}`}
              alt={product.name}
            />
            <h3 className="text-center text-lg font-semibold mt-2">
              {product.name}
            </h3>
            {showActions && (
              <div className="flex justify-between mt-3">
                <button
                  onClick={() => handleLikeProduct(product)}
                  className={`px-3 py-1 text-white rounded ${
                    isLiked
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {isLiked ? "Liked" : "Like"}
                </button>
                <button
                  onClick={() => handleSaveProduct(product)}
                  className={`px-3 py-1 text-white rounded ${
                    isSave
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  {isSave ? "Saved" : "Save"}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <section className="page3">
        {/* Header */}
        <div className="bg-[#1372F8] flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <img src={logo} alt="Easy Gas Logo" width={50} height={50} />
            <h1 className="ms-3 text-white text-xl font-semibold">Easy Gas</h1>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handlePageChange("liked")}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Liked Products
            </button>
            <button
              onClick={() => handlePageChange("saved")}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Saved Products
            </button>
          </div>
        </div>

        <div className="container mx-auto px-3 mb-[100px]">
          {currentPage === "home" && (
            <>
              {selectedProduct ? (
                <div className="product-details mt-5 p-5 border rounded-lg shadow-lg">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Ortga qaytish
                  </button>
                  <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
                  <img
                    className="product-detail-image mt-3 w-full h-48 object-cover rounded-md"
                    src={`http://admin.stag.uz/storage/${selectedProduct.image}`}
                    alt={selectedProduct.name}
                  />
                </div>
              ) : (
                <>
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

                  {selectedCategory && (
                    <>
                      <h3 className="branch-title pt-5 pb-3 ps-2 text-lg font-bold">
                        {selectedCategory.name} — Товары
                      </h3>
                      {renderProductsPage(
                        products.filter(
                          (p) =>
                            p.product_category_id === selectedCategory.catagory
                        )
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}

          {currentPage === "liked" && (
            <div>
              <button
                onClick={() => handlePageChange("home")}
                className="my-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Ortga qaytish
              </button>
              <h3 className="text-xl font-bold mt-5">Liked Products</h3>
              {likedProducts.length > 0 ? (
                <div>
                  {renderProductsPage(likedProducts, false)}
                </div>
              ) : (
                <p className="text-center mt-5">Hech narsa yoqmagan...</p>
              )}
            </div>
          )}

          {currentPage === "saved" && (
            <div>
              <button
                onClick={() => handlePageChange("home")}
                className="my-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Ortga qaytish
              </button>
              <h3 className="text-xl font-bold mt-5">Saved Products</h3>
              {savedProducts.length > 0 ? (
                renderProductsPage(savedProducts, false)
              ) : (
                <p className="text-center mt-5">Saqlangan mahsulot yo'q...</p>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Easygas;
