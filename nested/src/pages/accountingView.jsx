import { Link } from "react-router-dom";
import { TableDataPerson } from "../components/tableDataPerson";
import { ArrowBackIcon } from "../components/arrowBackIcon";

const colum = [
  "ID",
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
];

const rows = [
  {
    personName: "Jhoana",
    lastName: "Galindo",
    date: "20/11/2024",
    program: "Formación",
    category: "Juvenil",
    month: "Septiembre",
    payment_status: "Pendiente",
    payment_money: "40.000",
    balance: "20.000",
    total: "60.000",
  },
  {
    personName: "Luzdeluna",
    lastName: "Cortés",
    date: "20/11/2024",
    program: "Formación",
    category: "Juvenil",
    month: "Septiembre",
    payment_status: "Pendiente",
    payment_money: "40.000",
    balance: "20.000",
    total: "60.000",
  },
];

function AccountingView() {
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

        <Link to="/menu/contabilidad/agregar-contabilidad" className="block">
          <button className="px-4 py-3 font-medium rounded-md text-zinc-900 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Agregar Registro
          </button>
        </Link>

        {/* Tabla de resultados */}
        <TableDataPerson columnData={colum} rowData={rows} />
      </div>
    </div>
  );
}

export { AccountingView };
