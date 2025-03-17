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
        <nav className="fixed flex justify-between items-center w-full h-14 border-b-2 border-b-black shadow-lg  bg-primary z-10">
          <div>
            <img src="" alt="Logo" />
          </div>
          <ul className="flex">
            <li className="mx-2">
              <NavLink
                to={"/menu/personas"}
                className={`${navigatActived} flex justify-center items-center`}
              >
                <p className="me-1 text-1">Personas</p>
                <HiHome className={navigatActived && "stroke-black stroke-1"} />
              </NavLink>
            </li>
            <li className="mx-2">
              <NavLink
                to={"/menu/matricula"}
                className={`${navigatActived} flex justify-center items-center`}
              >
                <p className="me-1 text-1">Matrículas</p>
                <HiHome className={navigatActived && "stroke-black stroke-1"} />
              </NavLink>
            </li>
            <li className="mx-2">
              <NavLink
                to={"/menu/contabilidad"}
                className={`${navigatActived} flex justify-center items-center`}
              >
                <p className="me-1 text-1">Contabilidad</p>
                <HiHome className={navigatActived && "stroke-black stroke-1"} />
              </NavLink>
            </li>
          </ul>

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
