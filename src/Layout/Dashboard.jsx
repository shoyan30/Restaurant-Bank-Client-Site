import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaHome, FaCalendar, FaAd, FaMoneyBill, FaPhone, FaShoppingBag } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { IoMenuSharp } from 'react-icons/io5';
import { Link, Outlet } from 'react-router-dom';
import DashboardSideBar from '../Pages/Dashboard/DashboardSideBar';

const Dashboard = () => {

    return (
        <div className='sm:flex'>
          <DashboardSideBar></DashboardSideBar>

            {/* Content Section */}
            <div className='flex-1 px-4'>
                <Outlet />
            </div>


        </div>
    );
};

export default Dashboard;
