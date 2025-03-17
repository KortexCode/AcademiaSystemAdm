import personasImg from "../assets/personas_2.jpg";
import registerImg from "../assets/inscripcion_1.jpg";
import programsImg from "../assets/programs_1.jpg";
import accountingImg from "../assets/accounting_1.jpg";
import { Link } from "react-router-dom";
import { ImgMenu } from "../components/imgMenu";
/* import female_avatar from "../assets/female_avatar.png"; */
import { HiOutlineTable } from "react-icons/hi";
import "../styles/menu.css";

function MenuView() {
  const userName = "Admin";

  return (
    <div className="flex flex-col items-center justify-center w-full h-full pt-16 mx-auto px-4 sm:px-6  lg:px-8 md:pb-4">
      <div className="flex flex-col self-center items-center my-0 mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">Menú</h1>
        <hr className="border-y-zinc-600"></hr>
        <p className="text-lg font-semibold text-primary">
          Bienvenido, {userName}
        </p>
      </div>
      {/* PERFIL */}
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_1fr] w-[90%] gap-4 mt-6 mx-aut ">
        {/* <div className="profile-view w-60 lg:col-span-1 md:mt-0 mx-auto md:mx-0 mb-3 lg:mb-0 flex flex-col items-center md:justify-self-center rounded-lg overflow-hidden">
          <div className="w-full h-full">
            <img
              className="w-full object-fill"
              src={female_avatar}
              alt="profile"
            />
          </div>
          <div className="w-full h-auto p-3 flex flex-col items-center rounded-b-lg bg-neutral-800">
            <p className="bg-primary mb-2 text-lg font-bold">Admin</p>
            <p className="bg-primary text-base font-semibold">
              Luzdelua Cortés
            </p>
          </div>
        </div> */}
        {/* TABLAS */}
        <div className="table-container flex-col md:w-full lg:h-full lg:col-span-2 mb-3 lg:mb-0 rounded-2xl shadow-gray-800 overflow-hidden bg-neutral-800">
          <div className="w-full flex items-center justify-center bg-primary p-3">
            <p className="me-3 text-2xl font-bold">Consulta de tablas</p>
            <HiOutlineTable size={40} />
          </div>
          <div className="btn-menu-container w-full p-3 mb-3 md:mb-0 mt-7">
            <div className="w-[150px] flex flex-col items-center rounded-b-lg space-y-2 shadow-md shadow-black">
              <ImgMenu url={personasImg} alt={"Imagen de personas"} />

              <Link to={"/menu/personas"} className="w-full">
                <button className="w-full py-2 rounded-md text-lg text-zinc-900 font-semibold bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Personas
                </button>
              </Link>
            </div>

            <div className="w-[150px] flex flex-col items-center rounded-b-lg space-y-2 shadow-md shadow-black">
              <ImgMenu url={programsImg} alt={"Imagen de programas"} />

              <Link to={"/menu/programas"} className="w-full">
                <button className="w-full py-2 rounded-md text-lg text-zinc-900 font-semibold bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Programas
                </button>
              </Link>
            </div>

            <div className="w-[150px] flex flex-col items-center rounded-b-lg space-y-2 shadow-md shadow-black">
              <ImgMenu url={registerImg} alt={"Imagen de inscripciones"} />

              <Link to={"/menu/inscripcion"} className="w-full">
                <button className="w-full py-2 rounded-md text-lg text-zinc-900 font-semibold bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Inscripciones
                </button>
              </Link>
            </div>

            <div className="w-[150px] flex flex-col items-center rounded-b-lg space-y-2 shadow-md shadow-black">
              <ImgMenu url={accountingImg} alt={"Imagen de contabilidad"} />

              <Link to={"/menu/contabilidad"} className="w-full">
                <button className="w-full py-2 text-zinc-900 font-semibold text-lg rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Contabilidad
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MenuView };
