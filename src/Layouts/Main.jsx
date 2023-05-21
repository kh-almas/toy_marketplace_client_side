import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Pages/Shared/Header/Header.jsx";
import Footer from "../Pages/Shared/Footer/Footer.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
    AOS.init();
    return (
        <>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </>
    );
};

export default Main;