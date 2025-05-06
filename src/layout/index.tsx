import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@shared/components/header/navbar";

function Layout() {
  const location = useLocation();

  // Ocultar el Navbar si estamos en la página de login
  const hideNavbar = location.pathname === "/" || location.pathname === "/olvido-password"

  return (
    <div className="w-full h-full">
      {!hideNavbar && <Navbar />}
      <Outlet />
    </div>
  );
}

export { Layout };
