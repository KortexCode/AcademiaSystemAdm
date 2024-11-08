import personasImg from "../assets/personas_2.jpg";
import registerImg from "../assets/inscripcion_1.jpg";
import programsImg from "../assets/programs_1.jpg";
import accountingImg from "../assets/accounting_1.jpg";
import { Link } from "react-router-dom";

function Menu() {
  const userName = "Admin";

  return (
    <section className="flex justify-center h-screen w-screen bg-bdBackground">
      <div className="flex flex-col items-center justify-center w-full md:w-[620px] my-0 mx-auto md:my-4 px-4 sm:px-6  lg:px-8 md:pb-4 md:pt-2 md:rounded-lg shadow-orange-400 shadow-shadowTop bg-white">
        <h1 className="text-3xl font-extrabold text-gray-900">Menú</h1>
        <hr className="border-y-zinc-600"></hr>
        <p className="text-lg font-semibold text-primary">
          Bienvenido, {userName}
        </p>

        <div className="grid grid-cols-2 gap-6 mt-4">
          <div className="flex flex-col items-center rounded-b-lg space-y-2 shadow-md shadow-black">
            <img
              src={personasImg}
              alt="Personas Icono"
              className="w-full h-36"
            />
            <Link to={"/menu/personas"} className="w-full">
              <button className="w-full py-2 rounded-md text-lg text-zinc-900 font-semibold bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Personas
              </button>
            </Link>
          </div>

          <div className="flex flex-col items-center rounded-b-lg space-y-2 shadow-md shadow-black">
            <img
              src={programsImg}
              alt="Programas Icono"
              className="w-full h-36 object-cover"
            />
            <button className="w-full py-2 text-zinc-900 font-semibold text-lg rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Programas
            </button>
          </div>

          <div className="flex flex-col items-center rounded-b-lg space-y-2 shadow-md shadow-black">
            <img
              src={registerImg}
              alt="Inscripciones Icono"
              className="w-full h-36 object-cover"
            />
            <button className="w-full py-2 text-zinc-900 font-semibold text-lg rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Inscripciones
            </button>
          </div>

          <div className="flex flex-col items-center rounded-b-lg space-y-2 shadow-md shadow-black">
            <img
              src={accountingImg}
              alt="Contabilidad Icono"
              className="w-full h-36 object-cover "
            />
            <button className="w-full py-2 text-zinc-900 font-semibold text-lg rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Contabilidad
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Menu };
