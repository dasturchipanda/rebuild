import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar mb-50">
          <div className="navbar-inner">
            <ul className="navbar-wrapper fixed bottom-0 right-0 left-0 flex justify-between h-20 items-center px-3">
              <li className="navbar-list">
                <NavLink
                  to={"/news"}
                  className={({ isActive }) =>
                    isActive ? "active-link" : "navbar-link"
                  }
                >
                  <svg
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.9346 0.59036L24.824 1.70965L23.5375 0.399261C23.0093 -0.133087 22.1561 -0.133087 21.6144 0.399261L20.3143 1.70965L19.0142 0.399261C18.486 -0.133087 17.6193 -0.133087 17.0911 0.399261L15.8045 1.70965L14.5044 0.399261C14.3791 0.272721 14.2303 0.172329 14.0665 0.103832C13.9026 0.0353342 13.727 7.64377e-05 13.5496 7.64377e-05C13.3723 7.64377e-05 13.1966 0.0353342 13.0328 0.103832C12.869 0.172329 12.7201 0.272721 12.5949 0.399261L11.2947 1.70965L9.99463 0.399261C9.46646 -0.133087 8.61326 -0.133087 8.07155 0.399261L6.77143 1.70965L5.47132 0.399261C4.94315 -0.133087 4.07641 -0.133087 3.54824 0.399261L2.26167 1.70965L1.15115 0.59036C1.05568 0.496035 0.934645 0.432305 0.803296 0.407201C0.671947 0.382097 0.536165 0.396743 0.413061 0.449293C0.289957 0.501843 0.185042 0.589946 0.111537 0.702498C0.0380315 0.81505 -0.000773614 0.947013 1.16875e-05 1.08176V21.27C1.16875e-05 22.7715 1.21887 24 2.70858 24H24.3771C25.8668 24 27.0857 22.7715 27.0857 21.27V1.08176C27.0865 0.947013 27.0477 0.81505 26.9742 0.702498C26.9007 0.589946 26.7958 0.501843 26.6727 0.449293C26.5496 0.396743 26.4138 0.382097 26.2824 0.407201C26.1511 0.432305 26.03 0.496035 25.9346 0.59036ZM12.1886 21.27H2.70858V13.0801H12.1886V21.27ZM24.3771 21.27H14.8971V18.54H24.3771V21.27ZM24.3771 15.81H14.8971V13.0801H24.3771V15.81ZM24.3771 10.3501H2.70858V6.25508H24.3771V10.3501Z"
                      fill="none"
                    />
                  </svg>
                  <span>Новости</span>
                </NavLink>
              </li>
              <li className="navbar-list">
                <NavLink
                  to={"/cars"}
                  className={({ isActive }) =>
                    isActive ? "active-link" : "navbar-link"
                  }
                >
                  <svg
                    width="35"
                    height="24"
                    viewBox="0 0 35 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.4212 5.20449H30.5033C30.3422 5.20648 30.1876 5.26868 30.07 5.37888C29.1381 3.89133 28.1737 2.7005 27.4254 1.95217C24.8225 -0.650724 9.20514 -0.650724 6.60224 1.95217C5.85652 2.6992 4.89735 3.88222 3.97072 5.35936C3.85908 5.26319 3.7172 5.2093 3.56987 5.20709H0.650724C0.292826 5.20709 0 5.50122 0 5.85782V7.17228C0 7.52888 0.286319 7.87506 0.637709 7.94404L2.40768 8.28241C0.879779 11.6896 -0.0208232 15.9297 1.39515 20.1776V22.6986C1.39515 23.4183 1.57735 24 1.80251 24H5.13681C5.36196 24 5.54417 23.4183 5.54417 22.6986V20.6371C8.5349 20.9234 12.7672 21.2357 17.0125 21.2357C21.2188 21.2357 25.498 20.9286 28.4835 20.6449V22.6986C28.4835 23.4183 28.6657 24 28.8895 24H32.2239C32.4477 24 32.6299 23.4183 32.6299 22.6986L32.6273 20.1763C34.042 15.9336 33.144 11.6961 31.6187 8.28892L33.4303 7.94404C33.6071 7.90384 33.7656 7.80615 33.881 7.66628C33.9964 7.5264 34.0622 7.35221 34.068 7.17098V5.85652C34.0683 5.77129 34.0519 5.68684 34.0195 5.60799C33.9872 5.52914 33.9396 5.45744 33.8796 5.397C33.8195 5.33656 33.7481 5.28856 33.6694 5.25575C33.5908 5.22294 33.5064 5.20596 33.4212 5.20579V5.20449ZM5.46218 15.7814C4.8503 15.761 4.27027 15.5037 3.84462 15.0636C3.41897 14.6236 3.18101 14.0353 3.18101 13.4231C3.18101 12.8109 3.41897 12.2227 3.84462 11.7826C4.27027 11.3426 4.8503 11.0852 5.46218 11.0649C6.07405 11.0854 6.654 11.3429 7.07954 11.7831C7.50507 12.2232 7.74287 12.8115 7.7427 13.4238C7.74253 14.036 7.50441 14.6242 7.07863 15.0641C6.65285 15.504 6.07406 15.7612 5.46218 15.7814ZM3.47877 9.02684C4.72816 6.16756 6.4682 3.92907 7.52237 2.8723C8.28241 2.11095 11.8692 1.30145 17.0125 1.30145C22.1572 1.30145 25.7426 2.11225 26.504 2.8736C27.5582 3.92777 29.2969 6.16626 30.5463 9.02684C27.7716 9.33398 22.3667 8.62339 17.0138 8.62339C11.661 8.62339 6.25606 9.33398 3.47877 9.02684ZM28.5629 15.7814C27.951 15.761 27.371 15.5037 26.9453 15.0636C26.5197 14.6236 26.2817 14.0353 26.2817 13.4231C26.2817 12.8109 26.5197 12.2227 26.9453 11.7826C27.371 11.3426 27.951 11.0852 28.5629 11.0649C29.1748 11.0854 29.7547 11.3429 30.1802 11.7831C30.6058 12.2232 30.8436 12.8115 30.8434 13.4238C30.8432 14.036 30.6051 14.6242 30.1793 15.0641C29.7536 15.504 29.1748 15.7612 28.5629 15.7814Z"
                      fill="#9EAAB8"
                    />
                  </svg>
                  <span>Машины</span>
                  
                </NavLink>
              </li>
              <li className="navbar-list">
                <NavLink
                  to={"/easygas"}
                  className={({ isActive }) =>
                    isActive ? "active-link" : "navbar-link"
                  }
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6 0C12.348 0 9.54 1.848 8.136 4.536C6.59538 5.33865 5.33865 6.59538 4.536 8.136C3.16942 8.84608 2.02386 9.9175 1.22406 11.2336C0.424252 12.5497 0.000865416 14.06 0 15.6C0 20.244 3.756 24 8.4 24C11.652 24 14.46 22.152 15.864 19.464C17.4046 18.6613 18.6613 17.4046 19.464 15.864C20.8306 15.1539 21.9761 14.0825 22.7759 12.7664C23.5758 11.4503 23.9991 9.94005 24 8.4C24 3.756 20.244 0 15.6 0ZM8.4 21.6C7.2861 21.5991 6.19442 21.2883 5.24711 20.7023C4.2998 20.1163 3.53424 19.2783 3.03609 18.282C2.53793 17.2857 2.32684 16.1704 2.42644 15.0609C2.52603 13.9515 2.93237 12.8917 3.6 12C3.6 16.644 7.356 20.4 12 20.4C10.992 21.156 9.744 21.6 8.4 21.6ZM12 18C10.8861 17.9991 9.79442 17.6883 8.84711 17.1023C7.8998 16.5163 7.13424 15.6783 6.63609 14.682C6.13793 13.6857 5.92684 12.5704 6.02644 11.4609C6.12603 10.3515 6.53237 9.29166 7.2 8.4C7.2 13.032 10.956 16.788 15.6 16.8C14.592 17.556 13.344 18 12 18ZM17.64 14.04C17.004 14.268 16.32 14.4 15.6 14.4C12.288 14.4 9.6 11.712 9.6 8.4C9.6 7.68 9.732 6.996 9.96 6.36C10.596 6.132 11.28 6 12 6C15.312 6 18 8.688 18 12C18 12.72 17.868 13.404 17.64 14.04ZM20.4 12C20.4 7.368 16.644 3.612 12 3.6C13.156 2.738 14.5837 2.32097 16.0219 2.42518C17.4602 2.5294 18.8128 3.1479 19.8325 4.16755C20.8521 5.1872 21.4706 6.53985 21.5748 7.97808C21.679 9.41632 21.262 10.844 20.4 12Z"
                      fill="#9EAAB8"
                    />
                  </svg>
                  <span>EasyGas</span>
                </NavLink>
              </li>
              <li className="navbar-list">
                <NavLink
                  to={"/branches"}
                  className={({ isActive }) =>
                    isActive ? "active-link" : "navbar-link"
                  }
                >
                  <svg
                    width="30"
                    height="24"
                    viewBox="0 0 30 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.6667 21.3333H29.3333V24H0V21.3333H2.66667V1.33333C2.66667 0.979711 2.80714 0.640573 3.05719 0.390524C3.30724 0.140476 3.64638 0 4 0H17.3333C17.687 0 18.0261 0.140476 18.2761 0.390524C18.5262 0.640573 18.6667 0.979711 18.6667 1.33333V21.3333H21.3333V8H25.3333C25.687 8 26.0261 8.14048 26.2761 8.39052C26.5262 8.64057 26.6667 8.97971 26.6667 9.33333V21.3333ZM8 10.6667V13.3333H13.3333V10.6667H8ZM8 5.33333V8H13.3333V5.33333H8Z"
                      fill="#9EAAB8"
                    />
                  </svg>
                  <span>Филиалы</span>
                </NavLink>
              </li>
              <li className="navbar-list">
                <NavLink
                  to={"/profile"}
                  className={({ isActive }) =>
                    isActive ? "active-link" : "navbar-link"
                  }
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.66667 5.33333C6.66667 3.91885 7.22857 2.56229 8.22876 1.5621C9.22896 0.561903 10.5855 0 12 0C13.4145 0 14.771 0.561903 15.7712 1.5621C16.7714 2.56229 17.3333 3.91885 17.3333 5.33333C17.3333 6.74782 16.7714 8.10438 15.7712 9.10457C14.771 10.1048 13.4145 10.6667 12 10.6667C10.5855 10.6667 9.22896 10.1048 8.22876 9.10457C7.22857 8.10438 6.66667 6.74782 6.66667 5.33333ZM6.66667 13.3333C4.89856 13.3333 3.20286 14.0357 1.95262 15.286C0.702379 16.5362 0 18.2319 0 20C0 21.0609 0.421427 22.0783 1.17157 22.8284C1.92172 23.5786 2.93913 24 4 24H20C21.0609 24 22.0783 23.5786 22.8284 22.8284C23.5786 22.0783 24 21.0609 24 20C24 18.2319 23.2976 16.5362 22.0474 15.286C20.7971 14.0357 19.1014 13.3333 17.3333 13.3333H6.66667Z"
                      fill="#9EAAB8"
                    />
                  </svg>
                  <span>Профиль</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
