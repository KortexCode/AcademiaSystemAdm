import PropTypes from "prop-types";
import { RowTableData } from "./rowTableData";

TableData.propTypes = {
  columnData: PropTypes.array.isRequired,
  rowData: PropTypes.array.isRequired,
};

function TableData(props) {
  const { columnData, rowData } = props;

  const elementList = [];
  rowData.forEach((element) => {
    elementList.push(Object.values(element));
  });

  return (
    <div className="overflow-x-auto bg-white shadow-md">
      <table className="min-w-full table-fixed border-collapse border border-slate-400 text-left">
        <thead className="bg-gray-300 ">
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
          {elementList.map((item, index) => (
            <RowTableData rowData={item} key={index} />
          ))}
          {/* Fin de un registro de persona */}
        </tbody>
      </table>
    </div>
  );
}

export { TableData };
