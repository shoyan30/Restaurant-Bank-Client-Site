/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaCartPlus } from "react-icons/fa";
import useCart from '../../../Hooks/useCart';


const NavBar = () => {

    const [cart] = useCart()
    // console.log(cart);
    const { user, logOut } = useContext(AuthContext)
    
    const handleLogout = () => {
        logOut();
    }

    const navOption = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {/* <li><Link>Contact Us</Link></li>
        <li><Link>Dashboard</Link></li> */}
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order/salad'>Our Shop</NavLink></li>
        <li><NavLink to='/private'>Private</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>

       
        <div className="navbar-center">
            {
                user ? <>
                    {/* <span>{user?.displayName}</span> */}
                    <li><button onClick={handleLogout} className=" font-bold  btn-ghost">Log Out</button></li>
                </> :
                    <>
                        <li><NavLink to='/login'><a className="">Sign IN</a></NavLink></li>
                    </>
            }
        </div>
        {
            !user && (
                <li>
                    <NavLink to='/signup'>Sign Up</NavLink>
                </li>
            )
        }

    </>


    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-40 bg-black font-bold text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOption}
                        </ul>
                    </div>
                    <Link to='/'><a className="btn btn-ghost text-xl">FOOD BANK</a></Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>

                <div className="navbar-end mr-16 md:mr-0">
                    <li>
                        <Link to='/dashboard/cart' activeClassName="active">
                            <button className="btn">
                                <p className='text-2xl'><FaCartPlus /></p>
                                <div className="badge badge-secondary">+{cart.length}</div>
                            </button>
                        </Link>

                    </li>
                </div>



            </div>
        </div>
    );
};

export default NavBar;