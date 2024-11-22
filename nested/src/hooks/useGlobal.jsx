import { useState } from "react";

function useGlobal() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (action) => {
    setOpenModal(action);
  };

  return [
    {
      openModal,
      handleOpenModal,
    },
  ];
}

export { useGlobal };
