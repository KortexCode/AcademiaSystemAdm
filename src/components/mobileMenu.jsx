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
        linkName: "Programas",
        root: "/programas",
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
]

const navStyle = ({isActive}) => {
    return isActive ? "text-textActived " : "text-Inactived cursor-pointer hover:text-textActived";
}

function MobileMenu() {

    return(
       <div  className="absolute end-0 top-full w-36 rounded-b-lg bg-primary-color">
            <ul className="py-3.5 pl-5 text-xs font-bold list-disc">
               { links.map((item, index) => (
                        <li key={item.root}>
                            <NavLink key={index} to={item.root} className={navStyle}>{item.linkName}</NavLink>
                            <hr key={`${item.linkName}#`} className="mr-3 pt-2 border-orange-700"/>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export {MobileMenu}

