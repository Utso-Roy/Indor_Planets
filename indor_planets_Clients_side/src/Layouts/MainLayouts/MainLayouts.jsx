import React from 'react';
import { Outlet } from 'react-router';
import  Navbar  from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
const MainLayouts = () => {
    return (
        <div className='max-w-screen-xl  mx-auto px-4 w-full'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;