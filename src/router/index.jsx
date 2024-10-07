import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../pages/homePage";
import { NotFound } from "../pages/notFound";
import { AboutUs } from "../pages/aboutUs";
import { TrainingProgram } from "../pages/trainingProgram";
import { PersonalizedProgram } from "../pages/personalizedProgram";
import { SemiPersonalizedProgram } from "../pages/semiPersonalizedProgram";
import { TherapyDanceProgram } from "../pages/therapyDanceProgram";
import { Performance } from "../pages/performance";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<NotFound/>}>
             <Route index={true} path="/" element={<HomePage />} />
             <Route path="/sobre-nosotros" element={<AboutUs />} />
             <Route path="/formacion" element={<TrainingProgram />} />
             <Route path="/personalizado" element={<PersonalizedProgram />} />
             <Route path="/semi-personalizado" element={<SemiPersonalizedProgram />} />
             <Route path="/bailo-terapia" element={<TherapyDanceProgram />} />
             <Route path="/presentaciones" element={<Performance />} />
        </Route>      
    )
)

export {router}