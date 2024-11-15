import { useEffect, useRef } from "react";
import { useObserver } from "../hooks/useObserver";
import PropTypes from "prop-types";

ImgMenu.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

function ImgMenu(props) {
  const { url, alt } = props;
  const observer = useObserver(url, alt); //Se obtiene el hook del observador
  let node = useRef(); // Se obtiene una ref del nodo de la etiqueta img

  /* Una vez se renderice el componente se llama a la api del navegador Interceptor Observer*/
  useEffect(() => {
    observer.observe(node.current);
  }, []);

  return (
    <img
      ref={node}
      className="w-full h-36 bg-orange-300 animate-bounce"
      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
      alt="fondo"
    />
  );
}

export { ImgMenu };
