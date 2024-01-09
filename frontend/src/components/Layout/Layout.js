import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
const Layout = () => {
    return (
        <div>
            <Header />
            <SideBar />
            <Outlet />
        </div>
    );
};

export default Layout;