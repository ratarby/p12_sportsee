import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import  {MainContainer, LayoutContainer}  from '../../styles/layoutStyle';


/**
 * Renders the layout of the application, which includes the header, sidebar, and main content area.
 *
 * @return {JSX.Element} The layout component.
 */
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