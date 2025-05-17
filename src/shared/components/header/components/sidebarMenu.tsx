import React from "react";
import { useAuthenticated } from "../../../../context/useAuthenticated";
import { NavLink } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { HiCalendar } from "react-icons/hi";
import { HiAcademicCap } from "react-icons/hi";
import { HiCurrencyDollar } from "react-icons/hi";
import { HiLogout } from "react-icons/hi";


function SidebarMenu(props: any) {
  const {closeMenu} = props;
  const {logOut} = useAuthenticated();

  const handleLogOut = () => {
    console.log("CERRANDO SESIÓN")
    logOut();
  }


  const navlinkActived = (isActive:any) => {
    return isActive ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 bg-gray-700 group" : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group";
  }
  return (
    <>
      <div className="fixed top-0 w-screen h-screen opacity-50 bg-gray-400 z-40"></div>
      <aside
        id="default-sidebar"
        className="fixed top-0 right-0 z-50 w-52 h-screen transition-transform md-translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li className="flex justify-end cursor-pointer">
              <button onClick={() => closeMenu((prev: boolean) => !prev)}>
                <HiX
                  size={24}
                  className="text-gray-500 transition duration-75 dark:text-gray-400
             group-hover:text-gray-900 dark:group-hover:text-white"
                />
              </button>
            </li>
            <li onClick={()=> closeMenu(false)}>
              <NavLink
                to={"/inicio"}
                end
                className={({ isActive }) => navlinkActived(isActive)}
              >
                <HiHome
                  size={24}
                  className="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="ms-3">Inicio</span>
              </NavLink>
            </li>
            <li onClick={()=> closeMenu(false)}>
              <NavLink
                to={"/inicio/personas"}
                className={({ isActive }) => navlinkActived(isActive)}
                
              >
                <HiUsers
                  size={24}
                  className="shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Personas</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/inicio/programas"}
                className={({ isActive }) => navlinkActived(isActive)}
              >
                <HiCalendar
                  size={24}
                  className="shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Programas</span>
              </NavLink>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HiAcademicCap
                  size={24}
                  className="shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Matrículas
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 pl-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HiCurrencyDollar
                  size={24}
                  className="shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Contabilidad
                </span>
              </a>
            </li>
            <li>
              <button
                onClick={handleLogOut}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HiLogout
                  size={24}
                  className="shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Cerrar sesión
                </span>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export {SidebarMenu}
