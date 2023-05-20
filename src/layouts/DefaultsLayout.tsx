import {Navbar} from "../components/navbar/Navbar.tsx";
import {Outlet} from "react-router-dom";

export function DefaultsLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}