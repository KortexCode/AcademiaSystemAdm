import { Link } from "react-router-dom";
import PropTypes from "prop-types";

ArrowBackIcon.propTypes = {
  root: PropTypes.string.isRequired,
};

function ArrowBackIcon(props) {
  const { root } = props;

  return (
    <Link to={root} className="inline-block mt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-6 stroke-[3px] stroke-black hover:stroke-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </Link>
  );
}

export { ArrowBackIcon };
