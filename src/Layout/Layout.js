import React from 'react';
import Header from "./Header/Header"; 
import Footer from "./Footer/Footer";
import Banner from '../pages/Home/Banner/Banner';
import { Outlet } from 'react-router-dom';

const Layout = () => {



    return (
        <>
        <Header/>
        <Banner/>
            <main>
            <Outlet/>
            </main>

        </>
    );
};

export default Layout;