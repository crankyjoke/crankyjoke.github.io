import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: "80px" }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
