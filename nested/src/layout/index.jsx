import { Outlet } from "react-router-dom";
import { useGlobal } from "../hooks/useGlobal";

function Layout() {
  const [global] = useGlobal();

  return <Outlet context={global} />;
}

export { Layout };
