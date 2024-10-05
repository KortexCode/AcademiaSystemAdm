import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../pages/homePage";
import { NotFound } from "../pages/notFound";
import { AboutUs } from "../pages/aboutUs";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<NotFound/>}>
             <Route index={true} path="/" element={<HomePage />} />
             <Route path="/sobre-nosotros" element={<AboutUs />} />
        </Route>      
    )
)

export {router}