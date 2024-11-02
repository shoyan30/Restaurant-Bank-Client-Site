import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaCartPlus } from "react-icons/fa";
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';

const NavBar = () => {
    const [cart] = useCart();
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isLoggedIn, setIsLoggedIn] = useState(!!user);

    useEffect(() => {
        setIsLoggedIn(!!user); // Update the login state whenever `user` changes
    }, [user]);

    const handleLogout = () => {
        logOut().then(() => {
            setIsLoggedIn(false); // Ensure the state updates immediately on logout
        });
    };

    const navOption = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/menu'>Our Menu</NavLink></li>
            <li><NavLink to='/order/salad'>Our Shop</NavLink></li>
            <li><NavLink to='/private'>Private</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </>
    );

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-40 bg-black font-bold text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOption}

                            {isLoggedIn ? (
                                <button onClick={handleLogout} className="btn w-fit ms-3 font-bold">Log Out</button>
                            ) : (
                                <NavLink to='/login' className="btn w-fit ms-3">Log In</NavLink>
                            )}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">FOOD BANK</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>

                <div className="navbar-end mr-16 md:mr-0 hidden mr-2 lg:flex">
                    <div className='mr-4'>
                        {isLoggedIn ? (
                            <button onClick={handleLogout} className="btn text-red font-bold">Log Out</button>
                        ) : (
                            <NavLink to='/login' className="btn">Log In</NavLink>
                        )}
                    </div>

                    {/* Conditionally render the buttons based on admin and user status */}
                    {isAdmin && user ? (
                        <Link to="/dashboard/adminhome">
                            <button className="btn">Dashboard</button>
                        </Link>
                    ) : user  ? ( // Check for user status to display the cart button
                        <Link to="/dashboard/cart">
                            <button className="btn">
                                <p className="text-2xl"><FaCartPlus /></p>
                                <div className="badge badge-secondary">+{cart.length}</div>
                            </button>
                        </Link>
                    ) : null} {/* Render nothing if neither isAdmin nor isUser */}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
