import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout() {
    return (
        <div className="pt-16">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}