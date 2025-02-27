import { DeleteRegisterModal } from "./deleteRegisterModal";
import { ColumnTableData } from "./columnTableData";
import { RowTableData } from "./rowTableData";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

Table.propTypes = {
  ArrayColumn: PropTypes.array.isRequired,
  ArrayRows: PropTypes.array.isRequired,
  tableType: PropTypes.object.isRequired,
};

function Table(props) {
  const { openModalDelete, handleOpenModalDelete, handleRowSelect } =
    useOutletContext();
  const { ArrayColumn, ArrayRows, tableType } = props; //Datos de la tabla según vista

  /*Función para manejar apertura del modal de eliminación de registro */
  const onClickDelete = (row) => {
    handleOpenModalDelete(!openModalDelete);
    handleRowSelect(row);
  };

  return (
    <div className="overflow-x-auto bg-white shadow-md">
      <table className="min-w-full table-fixed border-collapse border border-slate-400 text-left">
        <thead className="bg-gray-300 ">
          <ColumnTableData columnData={ArrayColumn} />
        </thead>

        <tbody className="divide-y divide-gray-300">
          {ArrayRows.map((item, index) => (
            <RowTableData rowData={item} key={index} rowNum={index}>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                {tableType.type === "student" && (
                  <>
                    <button className="mr-2 text-primary hover:text-primary-dark">
                      Editar
                    </button>
                    |
                    <button
                      className="mx-2 text-red-600 hover:text-red-800"
                      onClick={() => onClickDelete(item)}
                    >
                      Eliminar
                    </button>
                    |
                    <button className="ml-2 text-blue-600 hover:text-blue-800">
                      inscribir
                    </button>
                  </>
                )}
                {tableType.type === "generic" && (
                  <>
                    <button className="mr-2 text-primary hover:text-primary-dark">
                      Editar
                    </button>
                    |
                    <button
                      className="mx-2 text-red-600 hover:text-red-800"
                      onClick={() => onClickDelete(item)}
                    >
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </RowTableData>
          ))}
        </tbody>
      </table>
      {openModalDelete && (
        <DeleteRegisterModal tableType={tableType.typeModal} />
      )}
    </div>
  );
}

export { Table };
