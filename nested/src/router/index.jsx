import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../layout/index";
import { HomePage } from "../pages/homePage";
import { NotFound } from "../pages/notFound";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<NotFound/>}>
             <Route index={true} path="/" element={<HomePage />} />
        </Route>      
    )
)

export {router}