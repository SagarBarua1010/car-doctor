import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Shaed/Footer/Footer';
import NavBar from '../Pages/Home/Shaed/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;