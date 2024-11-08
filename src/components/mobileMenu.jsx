import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

MobileMenu.propTypes = {
  navItems: PropTypes.array.isRequired,
};

const navStyle = ({ isActive }) => {
  return isActive
    ? "text-textActived "
    : "text-Inactived cursor-pointer hover:text-textActived";
};

function MobileMenu(props) {
  const { navItems } = props;

  return (
    <div className="md:hidden absolute end-0 top-full w-36 rounded-b-lg bg-primary-color z-20">
      <ul className="py-3.5 pl-5 text-xs font-bold list-disc">
        {navItems.map((item, index) => (
          <li key={item.root}>
            <NavLink key={index} to={item.root} className={navStyle}>
              {item.linkName}
            </NavLink>
            <hr
              key={`${item.linkName}#`}
              className="mr-3 pt-2 border-orange-700"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export { MobileMenu };
