import { useState } from "react";

function useGlobal() {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [rowSelect, setRowSelect] = useState([]); //fila seleccionada según acción

  const handleOpenModalDelete = (action) => {
    setOpenModalDelete(action);
    /*  setRowSelect(row); */
  };
  const handleRowSelect = (row) => {
    setRowSelect(row);
  };

  return [
    {
      openModalDelete,
      rowSelect,
      handleOpenModalDelete,
      handleRowSelect,
    },
  ];
}

export { useGlobal };
