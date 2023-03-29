import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';

const Main = () => {
    return (
        <div className='container mx-auto'>
                <Header/>
                <Outlet/>
                <Footer/>
        </div>
    );
};

export default Main;