import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "../layout/index";
import { NotFound } from "../pages/notFound";
import { AddPersonView } from "../pages/addPersonView";
import { ProgramView } from "../pages/programView";
import { RegistrationView } from "../pages/registrationView";
import { AccountingView } from "../pages/accountingView";
import { AddAccountingView } from "../pages/addAccountingView";
import { Login } from "@pages/login";
import {ForgotPassword} from "@pages/forgotPasswordView/forgotPassword"
import { Dashboard } from "@pages/dashboardView/dashboard";
import { Persons } from "@pages/personsView/persons";
import {RouteProtected} from "@shared/components/routeProtected/index";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      <Route index={true} path="/" element={<Login />} />
      <Route path="/olvido-password" element={<ForgotPassword />} />
      <Route path="/inicio" element={<RouteProtected><Dashboard /></RouteProtected>} />
      <Route path="/inicio/personas" element={<Persons />} />
      <Route
        path="/menu/personas/agregar-personas"
        element={<AddPersonView />}
      />
      <Route path="/inicio/programas" element={<ProgramView />} />
      <Route path="/menu/matricula" element={<RegistrationView />} />
      <Route path="/menu/contabilidad" element={<AccountingView />} />
      <Route
        path="/menu/contabilidad/agregar-contabilidad"
        element={<AddAccountingView />}
      />
    </Route>
  )
);

export { router };
