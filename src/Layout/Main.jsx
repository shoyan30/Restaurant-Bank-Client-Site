/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();

    // Check if the pathname includes 'login' or 'signup'
    const hidenavfooter = location.pathname.includes('login') || location.pathname.includes('signup');
    
    // Check if the current page is 'contact'
     const isContactPage = location.pathname.includes('contact');

    return (
        <div>
           <NavBar></NavBar>

            {/* Conditionally add margin only to the Contact page */}
            {/* <div className={isContactPage ? !hidenavfooter || <Footer></Footer> : ''}>
                {}
            </div> */}
            <Outlet />

            {isContactPage || <Footer></Footer>}
        </div>
    );
};

export default Main;
