import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const Layout = () => {
    return (
        <div className="flex flex-col  font-primary">
            {/*<Navbar />*/}
            <main className="flex-1">
                <Outlet /> {/* Pages will render here */}
            </main>
            {/*<Footer />*/}
        </div>
    );
};

export default Layout;
