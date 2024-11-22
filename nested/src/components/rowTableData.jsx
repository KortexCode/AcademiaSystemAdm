import PropTypes from "prop-types";

RowTableData.propTypes = {
  rowData: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

function RowTableData(props) {
  const { rowData, children } = props;

  return (
    <tr className="divide-x divide-gray-300 odd:bg-white even:bg-slate-100 ">
      {rowData.map((item, index) => (
        <td key={index} className="px-4 py-2 text-sm text-gray-600">
          {item}
        </td>
      ))}
      {children}
    </tr>
  );
}

export { RowTableData };
