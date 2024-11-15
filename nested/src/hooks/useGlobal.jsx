import { useState } from "react";

function useGlobal() {
  const [loader, setLoader] = useState(true);

  const handleLoader = () => {
    setLoader(false);
  };

  return [
    {
      loader,
      handleLoader,
    },
  ];
}

export { useGlobal };
