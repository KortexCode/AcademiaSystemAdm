import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../pages/homePage";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<p>NOT FOUND</p>}>
             <Route index={true} path="/" element={<HomePage />} />
        </Route>      
    )
)

export {router}