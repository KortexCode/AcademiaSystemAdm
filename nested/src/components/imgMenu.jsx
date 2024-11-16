import { useState } from "react";
import PropTypes from "prop-types";

ImgMenu.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

function ImgMenu(props) {
  const [isLoaded, setIsLoaded] = useState(true);
  const { url, alt } = props;

  const handleImageLoad = () => {
    setIsLoaded(false);
  };

  return (
    <>
      {/* Imagen de fondo (placeholder) */}
      {isLoaded && (
        <img
          className="w-full h-36 bg-orange-300 animate-pulse"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          alt="fondo"
        />
      )}

      {/* Imagen principal */}
      <img
        className={`w-full h-36 ${isLoaded ? "hidden" : "block"}`}
        src={url}
        alt={alt}
        onLoad={handleImageLoad}
      />
    </>
  );
}

export { ImgMenu };
