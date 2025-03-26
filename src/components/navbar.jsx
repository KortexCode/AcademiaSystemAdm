import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiUser } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { HiLogin } from "react-icons/hi";
import { HiOutlineChevronDown } from "react-icons/hi";
import logo from "../assets/logoAca.png";
import "../styles/navbar.css";


function Navbar() {
  const navigate = useNavigate();

  const onCloseSession = () => {
    localStorage.clear();
    navigate("/");
  }

  const navigatActived = ({ isActive }) =>
    isActive ? "text-primary-dark" : "text-white";
  return (
    <>
      <header className="w-full h-auto fixed z-10">
        <nav className="navbar flex justify-between items-center w-full h-14  bg-primary z-10">
          <div>
            <img src={logo} alt="Logo" className="w-[55px]" />
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

          <ul className="flex items-center me-4 buttons-navbar">
            <li className="me-4">
              <Link to={"/menu"} className="flex items-center text-text-primary-dark hover:text-text-primary-dark cursor-pointer">
                <p>Inicio</p>
                <HiHome size={20} />
              </Link>
            </li>
            <li className="flex items-center text-text-primary-dark hover:text-text-primary-dark cursor-pointer">
              <p>Menú</p>
              <HiOutlineChevronDown size={20} className="mt-1"/>
            </li>
          </ul>
          <div className="hidden">
            <button>Hamburguesa</button>
            <ul className="flex flex-col">
              <li>Inicio</li>
              <li>Perfil</li>
            </ul>
          </div>
        </nav>
        <div className="z-10 w-60 h-auto p-3 rounded-b-lg absolute top-[104%] right-0 bg-primary shadow-md shadow-[#4fbd0b]">
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
            <li className="link-li" onClick={onCloseSession}>
             <HiLogin size={20}/> <span className="inline-block font-semibold">Cerrar sesión</span>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export { Navbar };
