import { useState } from "react";
import { MobileMenu } from "./mobileMenu";
import { NavLink } from "react-router-dom";

const links = [
  {
    linkName: "Inicio",
    root: "/",
    isActive: false,
  },
  {
    linkName: "Sobre nosotros",
    root: "/sobre-nosotros",
    isActive: false,
  },
  {
    linkName: "Presentaciones",
    root: "/presentaciones",
    isActive: false,
  },
  {
    linkName: "Contactanos",
    root: "/contactanos",
    isActive: false,
  },
];

const navStyle = ({ isActive }) => {
  return isActive
    ? "text-textActived text-gray-900 font-semibold"
    : "text-Inactived cursor-pointer hover:text-textActived text-gray-900 font-semibold";
};

function Header() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <header className="w-full h-9 fixed top-0 shadow z-30">
      <nav
        className="flex flex-row items-center justify-between w-full h-full
            border-b border-solid border-orange-700 bg-primary-color"
      >
        <p className="ml-4">Logo</p>
        <ul className="hidden md:flex flex-row mr-4 space-x-7">
          {links.map((item, index) => (
            <li key={index}>
              <NavLink to={item.root} className={navStyle}>
                {item.linkName}
              </NavLink>
            </li>
          ))}
        </ul>
        <svg
          onClick={openMenu}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="fill-current"
          className="md:hidden size-7 mr-4 cursor-pointer"
          id="menu-mobile"
        >
          <path
            fillRule="evenodd"
            d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </nav>
      {open && <MobileMenu navItems={links} />}
    </header>
  );
}

export { Header };
