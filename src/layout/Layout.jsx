import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default Layout;


// import React from "react";
// import { Link } from "react-router-dom";
// import { IoSearchOutline } from "react-icons/io5";
// import { FaFilter, FaStar } from "react-icons/fa";
// import branch from "../../public/images/filial.jpg";
// import map from "../../public/images/map.png";
// import databranches from "../../datas/branches.json";
// import regions from "../../datas/regions.json";

// const Branches = () => {
//   return (
//     <div className="branches ">
//       <div className="container mx-auto px-[20px]">
//         <div className="filial-inner">
//           <h1 className="branch-title text-center my-[31px]">Филиалы</h1>
//           <img className="w-100" src={map} alt="map" />
//           <div className="filal-location border-[1px] bg-white border-[grey] p-3 mt-3 rounded-b-[22px] mb-[100px]">
//             <h1 className="branch-title">Выберите пункт</h1>
//             <p className="m-0 p-0 mb-2">Города</p>
//             {regions.map((e, index) => (
//               <div className="Location-titles flex flex-col" key={index}>
//                 <button className={index % 2 === 0 ? "stipeB" : "stipeW"}>{e.name}</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Branches;
