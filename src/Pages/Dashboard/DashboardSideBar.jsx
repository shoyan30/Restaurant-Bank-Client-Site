import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaHome, FaCalendar, FaAd, FaMoneyBill, FaPhone, FaShoppingBag, FaUtensils, FaUser, FaUsers, FaList, FaBook } from 'react-icons/fa';
import { IoMenuSharp } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';

const DashboardSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isAdmin = true;
    return (
        <div>
            {/* Menu on Small Screens */}
            <div className="sm:hidden bg-orange-400 p-4 flex justify-between items-center">
                <h1 className="text-white font-bold">Dashboard</h1>
                <button onClick={toggleMenu} className="text-white text-2xl">
                    <FaBars />
                </button>
            </div>

            {/* Sidebar for Large Screens */}
            <div className={`w-64 min-h-full bg-orange-600 sm:block ${isOpen ? 'block' : 'hidden'} sm:w-64`}>
                <h1 className="hidden sm:block sm:ms-4 text-white font-bold">Dashboard</h1>

                <ul className="menu text-white font-semibold space-y-2">

                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminhome' activeClassName="active">
                                    <FaHome className=' text-xl'></FaHome>Admin Home</NavLink>
                            </li>
                            <li>
                                <Link to='/dashboard/additems'>
                                    <FaUtensils className=' text-xl'></FaUtensils> Add Items</Link>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageitems' activeClassName="active">
                                    <FaList className=' text-xl' /> Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/managebookings' activeClassName="active">
                                    <FaBook className=' text-xl' /> Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'>
                                    {/* <FaUser className=' text-xl'></FaUser> All Users */}
                                    <FaUsers className=' text-xl'></FaUsers>All Users</NavLink>
                            </li>
                            
                        </> :
                            <>
                                <li>
                                    <NavLink to='/dashboard/userhome' activeClassName="active">
                                        <FaHome className=' text-xl'></FaHome>User Home</NavLink>
                                </li>
                                <li>
                                    <Link to='/dashboard/reservation'>
                                        <FaCalendar className=' text-xl'></FaCalendar> RESERVATION</Link>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart' activeClassName="active">
                                        <FaShoppingCart className=' text-xl' /> My Cart</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/mycart'>
                                        <FaMoneyBill className=' text-xl'></FaMoneyBill> PYMENT HISTORY</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addreview'>
                                        <FaAd className=' text-xl'></FaAd> ADD REVIEW</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/booking'>
                                        <FaAd className=' text-xl'></FaAd> MY BOOKING</NavLink>
                                </li>
                            </>
                    }
                    <div className="divider">OR</div>

                    <li>
                        <NavLink to='/'>
                            <FaHome className=' text-xl'></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>
                            <IoMenuSharp className=' text-xl'></IoMenuSharp>MENU</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <FaShoppingBag className=' text-xl'></FaShoppingBag>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>
                            <FaPhone className=' text-xl'></FaPhone>Contact</NavLink>
                    </li>

                </ul>



            </div>
        </div>
    );
};

export default DashboardSideBar;