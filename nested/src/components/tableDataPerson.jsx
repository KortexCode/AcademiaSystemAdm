import PropTypes from "prop-types";

TableDataPerson.propTypes = {
  columnData: PropTypes.array.isRequired,
  rowData: PropTypes.array.isRequired,
};

function TableDataPerson(props) {
  const { columnData, rowData } = props;

  const elementList = [];
  rowData.forEach((element) => {
    elementList.push(Object.values(element));
  });

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
          {elementList.map((row, index) => (
            <tr
              key={index}
              className="divide-x divide-gray-300 odd:bg-white even:bg-slate-100 "
            >
              {row.map((itemRow, index) => (
                <td key={index} className="px-4 py-2 text-sm text-gray-600">
                  {itemRow}
                </td>
              ))}
              {/* <ActionsTable editar= /> */}

              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                <button className="mr-2 text-green-400 hover:text-primary-dark">
                  Editar
                </button>
                |
                <button className="mx-2 text-red-600 hover:text-red-800">
                  Eliminar
                </button>
                |
                <button className="mx-2 text-blue-600 hover:text-red-800">
                  Inscribir
                </button>
              </td>
            </tr>
          ))}
          {/* Fin de un registro de persona */}
        </tbody>
      </table>
    </div>
  );
}

export { TableDataPerson };
