import { useState } from "react";
import logo from "../../public/images/EasyGasLogo.png";
import { IoSearchOutline } from "react-icons/io5";
import brands from "../../datas/brands.json";
import cars from "../../datas/cars.json";
import products from "../../datas/products.json";
import sets from "../../datas/collections.json";
import { NavLink } from "react-router-dom";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Cars = () => {
  const defaultSelectedBrand = brands.find(
    (brand) => brand.name === "Chevrolet"
  ); // Default brend
  const defaultSelectedCar = cars.find((car) => car.name === "ONIX"); // Default brend

  const [selectedBrand, setSelectedBrand] = useState(
    defaultSelectedBrand || null
  );
  const [selectedCar, setSelectedCar] = useState(defaultSelectedCar || null); // Tanlangan mashina

  // Filtrlangan mashinalar ro'yxati
  const filteredCars = selectedBrand
    ? cars.filter((car) => car.brand_id === selectedBrand.id)
    : cars;

  const [activeButton, setActiveButton] = useState("Metan");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const cmd = "no";

  return (
    <div className="cars">
      {/* Filter bo'lim */}
      <div className="filter container mx-auto px-5">
        <div className="form">
          <div className="search">
            <IoSearchOutline className="search-icon" />
            <input
              className="grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-black focus:outline focus:outline-0 sm:text-sm/6"
              type="text"
              placeholder="Поиск машины"
            />
          </div>
        </div>
      </div>

      {/* Brendlar ro'yxati */}
      <div className="cars-main container mx-auto px-4">
        <h1 className="brends-title">Марка</h1>
        <div className="brends">
          {brands.map((brend) => (
            <div
              key={brend.id}
              className={`brend ${
                selectedBrand?.id === brend.id ? "bordered" : ""
              }`} // Tanlangan brendni belgilash uchun stil
              onClick={() => {
                setSelectedBrand(brend);
                setSelectedCar(null); // Brend o'zgarganda mashinani reset qilish
              }}
            >
              <img
                loading="lazy"
                className="brend-image"
                src={`http://admin.stag.uz/storage/${brend.image}`}
                alt={brend.name}
              />
              <p className="product-name">{brend.name}</p>
            </div>
          ))}
        </div>

        {/* Mashinalar ro'yxati */}
        <h1 className="brends-title pt-3">Машины</h1>
        <div className="cars-list">
          {filteredCars.map((car) => (
            <div
              className={`brend ${
                selectedCar?.id === car.id ? "bordered" : ""
              }`} // Tanlangan mashinani belgilash uchun stil
              key={car.id}
              onClick={() => setSelectedCar(car)} // Mashinani tanlash funksiyasi
            >
              <img
                loading="lazy"
                className="brend-image"
                src={`http://admin.stag.uz/storage/${car.image}`}
                alt={car.name}
              />
              <p className="product-name">{car.name}</p>
            </div>
          ))}
        </div>

        <div className="car-infos mb-[100px]">
          <div className="container mx-auto px-1">
            {selectedCar ? (
              <>
                <div className="selected-car-info h-[230px] w-100 bg-white rounded-lg h-100 w-100">
                  <div className="selected-car-toppings flex justify-between items-center px-4 ">
                    <h3 className="selected-car-topping-title">
                      {selectedCar.name}
                    </h3>
                    <img src={logo} alt="photo error" width={35} height={35} />
                  </div>
                  <img
                    className="pt-3 px-3"
                    src={`http://admin.stag.uz/storage/${selectedCar.image}`}
                    alt="photo error"
                  />
                </div>
                <div className="chose">
                  <button
                    onClick={() => handleButtonClick("Metan")}
                    className={`chosebtn1 ${
                      activeButton === "Metan" ? "activechose" : ""
                    }`}
                  >
                    Metan
                  </button>
                  <button
                    onClick={() => handleButtonClick("Propan")}
                    className={`chosebtn2 ${
                      activeButton === "Propan" ? "activechose" : ""
                    }`}
                  >
                    Propan
                  </button>
                </div>
                <div className="collections">
                  {activeButton == "Metan" ? (
                    <>
                      {sets.map((e, i) => {
                        if (e.type == "Metan") {
                          return (
                            <div className="set">
                              <div>
                                <h3 className="setheading">Standart</h3>
                                <p className="price">
                                  $629{" "}
                                  <span className="priceafter">/permantly</span>
                                </p>
                                <p className="price-under">
                                  Barcha maxsulotlar uchun 1 yillik garant
                                  mavjud service ishlari va texnik ko'riklar
                                  mutlaqo tekin
                                </p>
                                <button className="buybtn">Buy now</button>
                                <div className="flex justify-center my-2">
                                  <span className="buybtnunder">
                                    what would you get
                                  </span>
                                </div>
                                <ul className="mt-2 flex flex-col gap-2">
                                  <li className="flex justify-start items-center">
                                    <span className="item-text bg-blue-400 rounded-full p-[4px] me-1">
                                      {" "}
                                      <IoCheckmarkDoneSharp className="size-[16px]" />
                                    </span>
                                    <h3 className="itemname"> {e.reductor}</h3>
                                  </li>
                                  <li className="flex justify-start items-center">
                                    <span className="item-text bg-blue-400 rounded-full p-[4px] me-1">
                                      {" "}
                                      <IoCheckmarkDoneSharp className="size-[16px]" />
                                    </span>
                                    <h3 className="itemname"> {e.forsunka}</h3>
                                  </li>
                                  <li className="flex justify-start items-center">
                                    <span className="item-text bg-blue-400 rounded-full p-[4px] me-1">
                                      {" "}
                                      <IoCheckmarkDoneSharp className="size-[16px]" />
                                    </span>
                                    <h3 className="itemname">
                                      {" "}
                                      {e.elekronika}
                                    </h3>
                                  </li>
                                  <li className="flex justify-start items-center">
                                    <span className="item-text bg-blue-400 rounded-full p-[4px] me-1">
                                      {" "}
                                      <IoCheckmarkDoneSharp className="size-[16px]" />
                                    </span>
                                    <h3 className="itemname"> {e.ballon}</h3>
                                  </li>
                                  <li className="flex justify-start items-center">
                                    <span className="item-text bg-blue-400 rounded-full p-[4px] me-1">
                                      {" "}
                                      <IoCheckmarkDoneSharp className="size-[16px]" />
                                    </span>
                                    <h3 className="itemname">
                                      {" "}
                                      {e.multiklapin}
                                    </h3>
                                  </li>
                                  <li className="flex justify-start items-center">
                                    <span className="item-text bg-blue-400 rounded-full p-[4px] me-1">
                                      {" "}
                                      <IoCheckmarkDoneSharp className="size-[16px]" />
                                    </span>
                                    <h3 className="itemname"> {e.filter}</h3>
                                  </li>
                                  <li className="flex justify-start items-center">
                                    <span className="item-text bg-blue-400 rounded-full p-[4px] me-1">
                                      {" "}
                                      <IoCheckmarkDoneSharp className="size-[16px]" />
                                    </span>
                                    <h3 className="itemname"> {e.extra}</h3>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          );
                        }
                      })}
                      <div className="custom-set bg-white rounded-lg px-3 my-[20px]">
                        <h2 className="default-text py-3">
                          O'zingizga mos setni topa olmadingizmi? Hammasini
                          o'zingiz istaganingizday tering
                        </h2>
                        <button className="buybtn">Products</button>
                      </div>
                    </>
                  ) : (
                    <>
                      {sets.map((e, i) => {
                        if (e.type == "Propan") {
                          return (
                            <div className="collection" key={e.id}>
                              <div className="collection-images">
                                <img src={e.image} alt="photo error" />
                              </div>
                              <div className="collection-body">
                                <h1 className="collection-title">{e.name}</h1>
                                <div>
                                  <span className="set-text">{e.reductor}</span>
                                </div>
                                <div>
                                  <span className="set-text">{e.forsunka}</span>
                                </div>
                                <div>
                                  <span className="set-text">
                                    {e.elekronika}
                                  </span>
                                </div>
                                <div>
                                  <span className="set-text">{e.ballon}</span>
                                </div>
                                <div>
                                  <span className="set-text">
                                    {e.multiklapin}
                                  </span>
                                </div>
                                <div>
                                  <span className="set-text">{e.filter}</span>
                                </div>
                                <div>
                                  <span className="set-text">{e.extra}</span>
                                </div>
                                <div className="collection-footer  pb-3">
                                  <a href="tel:+998991237788">
                                    To'liq malumot uchun:
                                    <span className="text-blue-600 border-blue-400 border-b-[1px]">
                                      991237788
                                    </span>
                                  </a>
                                  <button className="def-btn">
                                    Kozinkaga Qo'shish
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })}
                      <div className="custom-set bg-white rounded-lg px-3 my-[20px]">
                        <h2 className="default-text py-3">
                          O'zingizga mos setni topa olmadingizmi? Hammasini
                          o'zingiz istaganingizday tering
                        </h2>
                        <button className="buybtn">Products</button>
                      </div>
                    </>
                  )}
                </div>
              </>
            ) : (
              <div className="no-car-info bg-[#ffcc00] rounded-xl px-5 py-2">
                <p className="font-semibold pt-3">
                  Mashina haqida malumot olish uchun iltimos ulardan birinini
                  tanlang!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
