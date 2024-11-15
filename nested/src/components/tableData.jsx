import PropTypes from "prop-types";

TableData.propTypes = {
  columnData: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

function TableData(props) {
  const { columnData, children } = props;

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
        <tbody className="divide-y divide-gray-300">{children}</tbody>
      </table>
    </div>
  );
}

export { TableData };
