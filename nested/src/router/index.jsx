import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "../layout/index";
import { HomePage } from "../pages/homePage";
import { Menu } from "../pages/menu";
import { PersonPage } from "../pages/personPage";
import { NotFound } from "../pages/notFound";
import { AddPerson } from "../pages/addPerson";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/personas" element={<PersonPage />} />
      <Route path="/menu/personas/agregar-personas" element={<AddPerson />} />
    </Route>
  )
);

export { router };
