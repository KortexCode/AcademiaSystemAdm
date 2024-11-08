import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  descrip: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

function CourseCard(props) {
  const { title, img, descrip, to } = props;

  console.log(to);

  return (
    <div className="w-full mb-4 pb-2 shadow-sm shadow-black rounded-lg">
      <div className="relative flex items-center justify-center w-full h-32 rounded-t-lg">
        <p className="text-3xl font-bold text-textTitle text-center z-20">
          {title}
        </p>
        <img
          src={img}
          alt="imagen de programa"
          className="absolute w-full h-full rounded-lg top-0 object-cover"
        />
        <div className="absolute w-full h-full rounded-t-lg bg-front-background opacity-75 top-0"></div>
      </div>
      <div className="w-full px-2 pb-2">
        <p className="my-3 font-semibold ">{descrip}</p>
        <Link to={to}>
          <button className="p-2 rounded-lg shadow-sm shadow-black font-bold bg-secondary-color text-textCard">
            Más información
          </button>
        </Link>
      </div>
    </div>
  );
}

export { CourseCard };
