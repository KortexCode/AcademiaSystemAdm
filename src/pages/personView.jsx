import { Link } from "react-router-dom";
import { DataGridReact } from "../components/tableGrid";
/* import { ArrowBackIcon } from "../components/arrowBackIcon"; */
/* import { Table } from "../components/table"; */
import { HiArrowLeft } from "react-icons/hi";
import "../styles/personView.css";

/* const columnDataInstructor = [
  "ID",
  "Nombre",
  "Apellido",
  "Edad",
  "Sexo",
  "Dirección",
  "Teléfono",
  "Correo",
  "Seguridad Social",
  "Patología",
  "Perfil",
  "Profesion",
  "Disponibilidad",
  "Horas",
  "Fecha de registro",
  "Acciones",
];
 */

/* const columnDataStudent = [
  "ID",
  "Nombre",
  "Apellido",
  "Edad",
  "Sexo",
  "Dirección",
  "Teléfono",
  "Correo",
  "Seguridad Social",
  "Patología",
  "Acudiente Nombre",
  "Acudiente Apellido",
  "Teléfono Acudiente",
  "Teléfono Acudiente Alt",
  "Ocupación",
  "Estado",
  "Fecha de registro",
  "Acciones",
]; */
/* const columnDataStudent = [
  "ID",
  "Nombre",
  "Apellido",
  "Edad",
  "Sexo",
  "Dirección",
  "Teléfono",
  "Correo",
  "Seguridad Social",
  "Patología",
  "Fecha de registro",
  "Acciones",
]; */

function PersonView() {
  /*   const [column, setColum] = useState(columnDataStudent); */
  /*   const [radioInputOn, setRadioInputOn] = useState(true); */

  //Determina el tipo de tabla, así genera los botones de acción para cada registro
  /*   const dataTableType = radioInputOn
    ? {
        type: "student",
        typeModal: "generic",
      }
    : {
        type: "generic",
        typeModal: "generic",
      }; */

  /*  const handleShowStundents = () => {
    if (radioInputOn === false) {
      setRadioInputOn(true);
      setColum(columnDataStudent);
      setRows(rowDataStudent);
    }
  };
  const handleShowInstructors = () => {
    setRadioInputOn(false);
    setColum(columnDataInstructor);
    setRows(rowDataInstructor);
  }; */

  return (
    <div className="w-[90%] my-0 mx-auto pt-20 bg-white z-0">
      <div className="w-full flex relative items-center justify-center rounded-t-lg p-2 bg-primary">
        {/* <ArrowBackIcon root={"/menu"} /> */}
        <Link to={"/menu"} className="absolute left-3">
          <HiArrowLeft size={32} scale={10} stroke="black" />
        </Link>
        <h1 className="text-3xl font-extrabold text-gray-900 text-center m-0">
          Módulo de personas
        </h1>
      </div>
      <div className="container-view w-full px-3 border-2 mb-3 border-t-0 shadow-lg bg-neutral-900">
        {/*filtros */}
        <div className="search-view flex flex-col w-64 mt-4 p-4 border-2 rounded-lg shadow-lg bg-white">
          <p className="text-base font-medium">Filtros por categorías</p>
          <div className="w-full flex flex-col space-x-y">
            <label className="inline-flex items-center py-2">
              <input
                type="checkbox"
                className="text-primary focus:ring-primary"
              />
              <span className="ml-2 text-gray-700">Activos</span>
            </label>
            <label className="inline-flex items-center py-2">
              <input
                type="checkbox"
                className="text-primary focus:ring-primary"
              />
              <span className="ml-2 text-gray-700">Inactivos</span>
            </label>
          </div>
          <div className="w-full flex-col space-x-y">
            <div className="flex items-center justify-start py-2">
              <div>
                <input
                  type="checkbox"
                  /* checked={radioInputOn} */
                  /* onChange={handleShowStundents} */
                />
              </div>

              <span id="checkStudent" className="ml-2 text-gray-700">
                Estudiantes
              </span>
            </div>
            <div className="flex items-center justify-start py-2">
              <input
                id="checkInstructor"
                type="checkbox"
                /*   checked={!radioInputOn} */
                /*   onChange={handleShowInstructors} */
              />
              <span className="ml-2 text-gray-700">Instructores</span>
            </div>
          </div>
        </div>

        {/* Vista de tabla */}
        <div className="w-full table-view p-5 border-2 rounded-lg shadow-lg mb-4 bg-white">
          <div className="w-full flex justify-end">
            <div className="w-full me-2">
              <Link
                to="/menu/personas/agregar-personas"
                className="inline-block"
              >
                <button className="px-4 py-3 font-medium rounded-md text-zinc-900 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Agregar Persona
                </button>
              </Link>
            </div>
            <input
              type="text"
              placeholder="Buscar personas..."
              className="w-full sm:w-1/2 md:w-64 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          {/* Tabla de resultados */}
          <div className="w-full mt-3">
            <DataGridReact />
            {/* <Table
              ArrayColumn={column}
              ArrayRows={rows}
              tableType={dataTableType}
            ></Table> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export { PersonView };
