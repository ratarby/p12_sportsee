import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import  {MainContainer, LayoutContainer}  from '../../styles/layoutStyle';
const Layout = () => {
    return (
        <MainContainer>
            <Header />
            <SideBar />
            <LayoutContainer>
                <Outlet />
            </LayoutContainer>
        </MainContainer>
    );
};

export default Layout;