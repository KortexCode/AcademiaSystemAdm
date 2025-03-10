import { HiUser } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navigatActived = ({ isActive }) =>
    isActive ? "text-black" : "text-black";
  return (
    <>
      <header className="z-10">
        <nav className="fixed flex justify-end items-center w-full h-14 border-b-2 border-b-stone-400 shadow-lg  bg-primary z-10">
          <ul className="flex me-4 buttons-navbar">
            <li>
              <NavLink to={"/menu"} className={navigatActived}>
                <p>Inicio</p>{" "}
                <HiHome className={navigatActived && "stroke-black stroke-1"} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/perfil" className={navigatActived}>
                <p>Perfil</p>{" "}
                <HiUser className={navigatActived && "stroke-black stroke-1"} />
              </NavLink>
            </li>
          </ul>
          <div className="hidden">
            <button>Hamburguesa</button>
            <ul className="flex flex-col">
              <li>Inicio</li>
              <li>Perfil</li>
              <li></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export { Navbar };
