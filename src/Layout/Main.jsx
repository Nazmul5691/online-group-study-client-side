import { Outlet } from "react-router-dom";
import Footer from "../pages/SharedPages/Footer";
import Navbar from "../pages/SharedPages/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;