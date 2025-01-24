import { Link,  useNavigate} from "react-router-dom";
import gentra from "../../public/images/gentra.png";
import logo from "../../public/images/EasyGasLogo.png";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { PiChatCircleTextLight } from "react-icons/pi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { BiSolidDoorOpen } from "react-icons/bi";

const Profile = () => {
  return (
    <>
        <div className="profile">
          <div className="container-fluid mx-auto px-[20px]">
            <div className="profile-inner">
              {/*  Top Header */}
              <h1 className="text-center branch-title  mt-4">Профиль</h1>
              <div className="stag-number shadow mt-4 bg-white rounded-[8px] px-4 py-2 flex items-center">
                <IoPersonOutline className="person-icon" />
                <div className="number-info ms-4">
                  <h3 className="m-0 p-0 fs-4">Стаг Сервис</h3>
                  <p className="m-0 p-0 fs-6">+998 91-444-00-00</p>
                </div>
              </div>
              {/* Tanlangan Mashina */}
              <div className="selected-car rounded-[8px] bg-white shadow py-2 px-3 text-center mt-3">
                <div className="car-toppings flex justify-between">
                  <h4>Gentra</h4>
                  <img src={logo} alt="Logo" width={32} height={32} />
                </div>
                <img
                  className="scar-img py-4"
                  src={gentra}
                  alt="Selected Car"
                />
              </div>
              {/* Feedback */}
              <div className="stag-number shadow mt-3 bg-white rounded-[8px] px-3 py-3">
                <div className="feedback pb-2 flex items-center justify-between">
                <div className="flex">
                  <PiChatCircleTextLight className="person-icon " />
                    <p className="m-0 p-0 ms-2">Связаться с нами</p>
                </div>
                <IoIosArrowForward className="icon-arrow"/>
                </div>

                <div className="feedback pt-2 flex items-center justify-between">
                <div className="flex">
                  <PiTelegramLogoLight className="person-icon " />
                    <p className="m-0 p-0 ms-2">Связаться с нами</p>
                </div>
                <IoIosArrowForward className="icon-arrow"/>
                </div>
              </div>
            </div>
          </div>
          <div className="logout-profile">
            <BiSolidDoorOpen className="fs-3 mb-1 logout-icon"/>
            <p className="ps-2 inline-block">Выйти</p>
          </div>
        </div>
    </>
  );
};

export default Profile;
