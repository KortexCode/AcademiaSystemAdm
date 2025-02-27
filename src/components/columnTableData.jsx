import PropTypes from "prop-types";

ColumnTableData.propTypes = {
  columnData: PropTypes.array.isRequired,
};

function ColumnTableData(props) {
  const { columnData } = props;

  return (
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
  );
}

export { ColumnTableData };
