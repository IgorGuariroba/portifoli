import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home.tsx";
import {About} from "./pages/about/About.tsx";
import {Portfolio} from "./pages/Portfolio.tsx";
import {Contact} from "./pages/Contact.tsx";
import {DefaultsLayout} from "./layouts/DefaultsLayout.tsx";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultsLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<About/>}/>
                <Route path="/portifolio" element={<Portfolio/>}/>
                <Route path="/contato" element={<Contact/>}/>
            </Route>
        </Routes>
    )
}