import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../components/arrowBackIcon";
import { Table } from "../components/table";
import { SelectProgramCategory } from "../components/selectProgramCategory";

const colum = [
  "Nombre",
  "Apellido",
  "Fecha de pago",
  "Programa",
  "Categoria",
  "Mes",
  "Concepto",
  "Estado de pago",
  "Abono",
  "Saldo",
  "Total",
  "Acciones",
];

const rows = [
  [
    "Jhoana",
    "Galindo",
    "20/11/2024",
    "Formación",
    "Juvenil",
    "Septiembre",
    "Matrícula",
    "Pendiente",
    "40.000",
    "20.000",
    "60.000",
  ],
  [
    "Luzdeluna",
    "Cortés",
    "20/11/2024",
    "Formación",
    "Juvenil",
    "Septiembre",
    "Mensualidad",
    "Pendiente",
    "40.000",
    "20.000",
    "60.000",
  ],
];

function AccountingView() {
  const dataTableType = {
    type: "generic",
    typeModal: "generic",
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 pb-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-6">
        <ArrowBackIcon root={"/menu"} />
        {/* Título y botón de agregar */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Contabilidad
          </h1>
        </div>

        {/* Barra de búsqueda y filtros */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <input
            type="text"
            placeholder="Buscar un registro..."
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        {/*Botón agregar personas*/}

        <Link
          to="/menu/contabilidad/agregar-contabilidad"
          className="inline-block"
        >
          <button className="px-4 py-3 font-medium rounded-md text-zinc-900 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Agregar Registro
          </button>
        </Link>
        <SelectProgramCategory />

        <Table
          ArrayColumn={colum}
          ArrayRows={rows}
          tableType={dataTableType}
        ></Table>
      </div>
    </div>
  );
}

export { AccountingView };
