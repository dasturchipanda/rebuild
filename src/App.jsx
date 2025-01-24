import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Layout = React.lazy(() => import("./layout/Layout")); // Layout-ni import qilamiz
const Home = React.lazy(() => import("./pages/Home")); // Home sahifasi
const Nonpage = React.lazy(() => import("./pages/Nonpage")); // Not found sahifasi
import Logo from '../public/images/EasyGasLogo.png'
import News from "./pages/News";
import Cars from "./pages/Cars";
import Easygas from "./pages/Easygas";
import Branches from "./pages/Branches";
import Profile from "./pages/Profile";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      {/* Lazy yuklashni ko'rsatish uchun Suspense ishlatamiz */}
      <Suspense fallback={<div className="loading"><img src={Logo} alt="Logo" /></div>}>
        <Routes>
          {/* Layout ichida barcha sahifalar */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* Bosh sahifa */}
            <Route path="/news" element={<News/>}/>
            <Route path="/cars" element={<Cars/>}/>
            <Route path="/easygas" element={<Easygas/>}/>
            <Route path="/branches" element={<Branches/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/products" element={<Products/>}/>
          </Route>
            <Route path="*" element={<Nonpage />} /> {/* Not found sahifa */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
