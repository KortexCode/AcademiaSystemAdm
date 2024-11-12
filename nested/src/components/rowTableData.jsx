import PropTypes from "prop-types";
/* import { ActionsTable } from "./actionsTable"; */

RowTableData.propTypes = {
  rowData: PropTypes.array.isRequired,
};

function RowTableData(props) {
  const { rowData } = props;
  console.log("En row", rowData);

  return (
    <tr className="divide-x divide-gray-300 odd:bg-white even:bg-slate-100 ">
      {rowData.map((item, index) => (
        <td key={index} className="px-4 py-2 text-sm text-gray-600">
          {item}
        </td>
      ))}
      {/* <ActionsTable editar= /> */}

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
  );
}

export { RowTableData };
