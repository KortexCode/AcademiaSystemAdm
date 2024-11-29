import { createPortal } from "react-dom";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";

DeleteRegisterModal.prototype = {
  tableType: PropTypes.string.isRequired,
};

function DeleteRegisterModal(props) {
  //Se recibe los datos de la columna a eliminar y el setState para cerrar el modal
  const { rowSelect, handleOpenModalDelete } = useOutletContext();
  //Tipo de tabla
  const { tableType } = props;
  return createPortal(
    <div className="flex items-center justify-center min-w-screen min-h-screen fixed top-0 bottom-0 left-0 right-0">
      <div className="flex flex-col justify-between w-[400px]  p-4 rounded-lg border-2 border-solid border-primary bg-white z-10 space-y-4">
        <p className="font-bold text-xl text-center ">
          ¿Seguro que deseas eliminar este registro?
        </p>
        <div className="w-full h-auto font-medium p-1 bg-gray-200 rounded-lg text-center">
          {tableType === "generic" && (
            <>
              <p className="mr-2">
                Cédula: <span className="font-normal">{rowSelect[0]}</span>
              </p>
              <span>
                Nombre: <span className="font-normal">{rowSelect[1]}</span>{" "}
                <span className="font-normal">{rowSelect[2]}</span>
              </span>
            </>
          )}
          {tableType === "program" && (
            <>
              <p className="mr-2">
                Nombre: <span className="font-normal">{rowSelect[0]}</span>
              </p>
              <p>
                Categoría: <span className="font-normal">{rowSelect[2]}</span>
              </p>
            </>
          )}
        </div>
        <div className="w-full flex justify-center">
          <button
            className="px-4 py-3 font-medium rounded-md text-zinc-900 bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-red-500"
            onClick={() => handleOpenModalDelete(false)}
          >
            CERRAR
          </button>
          <button className="ml-4 px-4 py-3 font-medium rounded-md text-zinc-900 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            CONFIRMAR
          </button>
        </div>
      </div>

      <div className="w-full h-full absolute top-0 bg-slate-500 opacity-50"></div>
    </div>,
    document.getElementById("delete-modal")
  );
}

export { DeleteRegisterModal };
