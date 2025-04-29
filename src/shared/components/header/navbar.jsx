import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { HiLogin } from "react-icons/hi";
import { SidebarMenu } from "./components/sidebarMenu";
import logo from "@assets/logoAca.png";
import "./styles.css";


function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
 
  const handleToggleOpenMenu = () => {
    console.log("entrando", openMenu)
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className="w-full h-auto fixed z-50">
        <nav className="navbar flex justify-between items-center w-full h-14  bg-gray-800 z-40">
          <div>
            <img src={logo} alt="Logo" className="w-[55px]" />
          </div>
          <ul className="flex items-center me-4 buttons-navbar">
            <li className="me-4">
              <Link
                to={"/inicio"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <p>Inicio</p>
                <HiHome size={20} />
              </Link>
            </li>
            <li
              onClick={handleToggleOpenMenu}
              className="p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
            >
              <button className="flex items-center">
                <p>Menú</p>
                <HiMenuAlt1 size={24} className="mt-1" />
              </button>
            </li>
          </ul>
        </nav>
        <div className="hidden z-10 w-60 h-auto p-3 rounded-b-lg absolute top-[104%] right-0 bg-primary shadow-md shadow-[#4fbd0b]">
          <ul className="space-y-3">
            <Link to="/perfil">
              <li className="link-li">
                <HiUser size={20} />
                <span className="font-semibold">Perfil</span>
              </li>
            </Link>
            <li className="">
              <hr className="border border-[#4fbd0b]" />
            </li>
            <li className="link-li">
              <HiLogin size={20} />{" "}
              <span className="inline-block font-semibold">Cerrar sesión</span>
            </li>
          </ul>
        </div>
      </header>
      {openMenu && <SidebarMenu closeMenu={setOpenMenu}/>}
    </>
  );
}

export { Navbar };
