import PropTypes from "prop-types";

TableData.propTypes = {
  columnData: PropTypes.array.isRequired,
};

function TableData(props) {
  const { columnData } = props;

  console.log(props);

  return (
    <div className="overflow-x-auto bg-white shadow-md">
      <table className="min-w-full table-fixed border-collapse border border-slate-400 text-left">
        <thead className="bg-gray-300">
          <tr>
            {columnData.map((item, index) => (
              <th
                key={index}
                className="px-4 py-2 border border-slate-400 text-left text-xs font-medium text-gray-950 uppercase tracking-wider"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          {/* Ejemplo de un registro de persona */}
          <tr className="divide-x divide-gray-300 odd:bg-white even:bg-slate-100 ">
            <td className="px-4 py-2 text-sm text-gray-600">12345</td>
            <td className="px-4 py-2 text-sm text-gray-600">Juan</td>
            <td className="px-4 py-2 text-sm text-gray-600">Pérez</td>
            <td className="px-4 py-2 text-sm text-gray-600">30</td>
            <td className="px-4 py-2 text-sm text-gray-600">M</td>
            <td className="px-4 py-2 text-sm text-gray-600">
              Av. Siempre Viva 123
            </td>
            <td className="px-4 py-2 text-sm text-gray-600">555-1234</td>
            <td className="px-4 py-2 text-sm text-gray-600">
              juan.perez@example.com
            </td>
            <td className="px-4 py-2 text-sm text-gray-600">Yes</td>
            <td className="px-4 py-2 text-sm text-gray-600">Diabetes</td>
            <td className="px-4 py-2 text-sm text-gray-600">2023-08-15</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
              <button className="mr-2 text-primary hover:text-primary-dark">
                Editar
              </button>
              |
              <button className="mx-2 text-red-600 hover:text-red-800">
                Eliminar
              </button>
            </td>
          </tr>
          {/* Fin de un registro de persona */}
          {/* Ejemplo de un registro de persona */}
          <tr className="divide-x divide-gray-300 odd:bg-white even:bg-slate-100 ">
            <td className="px-4 py-2 text-sm font-medium text-gray-500">
              12345
            </td>
            <td className="px-4 py-2 text-sm text-gray-600">Juan</td>
            <td className="px-4 py-2 text-sm text-gray-600">Pérez</td>
            <td className="px-4 py-2 text-sm text-gray-600">30</td>
            <td className="px-4 py-2 text-sm text-gray-600">M</td>
            <td className="px-4 py-2 text-sm text-gray-600">
              Av. Siempre Viva 123
            </td>
            <td className="px-4 py-2 text-sm text-gray-600">555-1234</td>
            <td className="px-4 py-2 text-sm text-gray-600">
              juan.perez@example.com
            </td>
            <td className="px-4 py-2 text-sm text-gray-600">Yes</td>
            <td className="px-4 py-2 text-sm text-gray-600">Diabetes</td>
            <td className="px-4 py-2 text-sm text-gray-600">2023-08-15</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
              <button className="mr-2 text-primary hover:text-primary-dark">
                Editar
              </button>
              |
              <button className="mx-2 text-red-600 hover:text-red-800">
                Eliminar
              </button>
            </td>
          </tr>
          {/* Fin de un registro de persona */}
        </tbody>
      </table>
    </div>
  );
}

export { TableData };
