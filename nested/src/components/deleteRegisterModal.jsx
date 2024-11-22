import PropTypes from "prop-types";
import { createPortal } from "react-dom";

DeleteRegisterModal.propTypes = {
  row: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
};

function DeleteRegisterModal(props) {
  //Se recibe los datos de la columna a eliminar y el setState para cerrar el modal
  const { row, closeModal } = props;

  return createPortal(
    <div className="flex items-center justify-center w-screen h-screen fixed top-0 bottom-0 left-0 right-0">
      <div className="w-96 h-80 bg-white z-10">
        <p>
          Hola Mundo soy un portal y voy a eliminar a {row[0]} {row[1]} con
          cédula {row[2]}
        </p>
        <button onClick={() => closeModal(false)}>CERRAR</button>
      </div>
      <div className="w-full h-full absolute top-0 bg-slate-500 opacity-50"></div>
    </div>,
    document.getElementById("delete-modal")
  );
}

export { DeleteRegisterModal };
