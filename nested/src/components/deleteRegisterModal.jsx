import { createPortal } from "react-dom";
import { useOutletContext } from "react-router-dom";

function DeleteRegisterModal() {
  //Se recibe los datos de la columna a eliminar y el setState para cerrar el modal
  const { rowSelect, handleOpenModalDelete } = useOutletContext();

  return createPortal(
    <div className="flex items-center justify-center w-screen h-screen fixed top-0 bottom-0 left-0 right-0">
      <div className="w-96 h-80 bg-white z-10">
        <p>
          Hola Mundo soy un portal y voy a eliminar a {rowSelect[0]}
          {rowSelect[1]} con cédula {rowSelect[2]}
        </p>
        <button onClick={() => handleOpenModalDelete(false)}>CERRAR</button>
      </div>
      <div className="w-full h-full absolute top-0 bg-slate-500 opacity-50"></div>
    </div>,
    document.getElementById("delete-modal")
  );
}

export { DeleteRegisterModal };
