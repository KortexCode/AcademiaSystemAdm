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

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route index={true} path="/menu" element={<Menu />} />
      <Route index={true} path="/personas" element={<PersonPage />} />
    </Route>
  )
);

export { router };
