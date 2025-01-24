import React from "react";
import logo from "../../public/images/EasyGasLogo.png";
import anicar from "../../public/images/anicar.jpg";
import brends from "../../datas/brands.json";

const Easygas = () => {
  return (
    <>
      <section className="page3">
        <div className="bg-[#1372F8] flex items-start justify-center pt-[40px] pb-[12px] rounded-b-3xl">
          <img
            className="white-logo"
            src={logo}
            alt="photo error"
            width={50}
            height={50}
          />
          <h1 className="news-title ms-1 pt-3">Easy Gas</h1>
        </div>
        <div className="container mx-auto px-3">
          <div className="page-inner ">
            <h3 className="branch-title pt-3 ps-2">Audi R5</h3>
            <img className="ani-car px-[20px] w-100 mt-3" src={anicar} alt="car" />
          </div>
          <h3 className=" branch-title pt-3 pb-2 ps-2">Товары</h3>
          <div className="brends">
            {brends.map((brend) => (
              <div className="brend" key={brend.id}>
                <img className="brend-image" src={`http://admin.stag.uz/storage/${brend.image}`} alt="Brend" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Easygas;
