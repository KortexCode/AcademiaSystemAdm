import { useState } from "react";
import { useAuthenticated } from "../../../hooks/useAuthenticated";
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
      </header>
      {openMenu && <SidebarMenu closeMenu={setOpenMenu}/>}
    </>
  );
}

export { Navbar };
