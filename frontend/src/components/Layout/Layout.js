import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import  {LayoutContainer}  from '../../styles/layoutStyle';
const Layout = () => {
    return (
        <>
            <Header />
            <SideBar />
            <LayoutContainer>
                <Outlet />
            </LayoutContainer>
        </>

    );
};

export default Layout;