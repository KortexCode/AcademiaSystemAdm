import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "../layout/index";
import { LoginPage } from "../pages/loginView";
import { MenuView } from "../pages/menuView";
import { PersonView } from "../pages/personView";
import { NotFound } from "../pages/notFound";
import { AddPersonView } from "../pages/addPersonView";
import { ProgramView } from "../pages/programView";
import { RegistrationView } from "../pages/registrationView";
import { AccountingView } from "../pages/accountingView";
import { AddAccountingView } from "../pages/addAccountingView";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      <Route index={true} path="/" element={<LoginPage />} />
      <Route path="/menu" element={<MenuView />} />
      <Route path="/menu/personas" element={<PersonView />} />
      <Route
        path="/menu/personas/agregar-personas"
        element={<AddPersonView />}
      />
      <Route path="/menu/programas" element={<ProgramView />} />
      <Route path="/menu/inscripcion" element={<RegistrationView />} />
      <Route path="/menu/contabilidad" element={<AccountingView />} />
      <Route
        path="/menu/contabilidad/agregar-contabilidad"
        element={<AddAccountingView />}
      />
    </Route>
  )
);

export { router };
