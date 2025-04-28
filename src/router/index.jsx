import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "../layout/index";
import { LoginPage } from "../pages/loginView/login";
import { NotFound } from "../pages/notFound";
import { AddPersonView } from "../pages/addPersonView";
import { ProgramView } from "../pages/programView";
import { RegistrationView } from "../pages/registrationView";
import { AccountingView } from "../pages/accountingView";
import { AddAccountingView } from "../pages/addAccountingView";
import {ForgotPassword} from "../pages/forgotPasswordView/forgotPassword"
import { Dashboard } from "../pages/dashboard";
import { Persons } from "../pages/persons";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      <Route index={true} path="/" element={<LoginPage />} />
      <Route path="/olvido-password" element={<ForgotPassword />} />
      <Route path="/menu" element={<Dashboard />} />
      <Route path="/menu/personas" element={<Persons />} />
      <Route
        path="/menu/personas/agregar-personas"
        element={<AddPersonView />}
      />
      <Route path="/menu/programas" element={<ProgramView />} />
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
