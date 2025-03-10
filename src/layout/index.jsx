import { Outlet, useLocation } from "react-router-dom";
import { useGlobal } from "../hooks/useGlobal";
import { Navbar } from "../components/navbar";

function Layout() {
  const [global] = useGlobal();
  const location = useLocation();

  // Ocultar el Navbar si estamos en la página de login
  const hideNavbar = location.pathname === "/";

  return (
    <div className="w-full h-auto relative">
      {!hideNavbar && <Navbar />}
      <Outlet context={global} />
    </div>
  );
}

export { Layout };
