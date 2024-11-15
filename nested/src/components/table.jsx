import { ColumnTableData } from "./columnTableData";
import { RowTableData } from "./rowTableData";
import PropTypes from "prop-types";

Table.propTypes = {
  ArrayColumn: PropTypes.array.isRequired,
  ArrayRows: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

function Table(props) {
  const { ArrayColumn, ArrayRows, children } = props;
  return (
    <div className="overflow-x-auto bg-white shadow-md">
      <table className="min-w-full table-fixed border-collapse border border-slate-400 text-left">
        <thead className="bg-gray-300 ">
          <ColumnTableData columnData={ArrayColumn} />
        </thead>

        <tbody className="divide-y divide-gray-300">
          {ArrayRows.map((item, index) => (
            <RowTableData rowData={item} key={index}>
              {children}
            </RowTableData>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Table };
