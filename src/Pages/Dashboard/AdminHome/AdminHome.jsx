import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import AxiosSecure from '../../../Hooks/AxiosSecure';
import { FaMoneyCheck, FaUser, FaUsers } from 'react-icons/fa';
import { MdBorderColor, MdMenuBook } from 'react-icons/md';

const AdminHome = () => {

    const { user } = useContext(AuthContext)
    const axiosSecure = AxiosSecure()

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-3xl mt-4">
                <span>Hi, Welcome </span>
                {user?.displayName ? (
                    <span className="text-orange-800 font-semibold">{user.displayName}</span>
                ) : (
                    'Back'
                )}

            </h2>

            <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 mt-10">
                <div className="flex items-center justify-center h-[150px] bg-gradient-to-r from-purple-400 to-purple-800 text-white rounded-lg shadow-md">
                    <FaMoneyCheck className="text-6xl mr-4" />
                    <div>
                        <h1 className="text-4xl font-bold">{stats.revenue}</h1>
                        <p className="text-sm font-bold">Revenue</p>
                    </div>
                </div>

                <div className="flex items-center justify-center h-[150px] bg-gradient-to-r from-orange-400 to-orange-800 text-white rounded-lg shadow-md">
                    <FaUsers className="text-6xl mr-4" />
                    <div>
                        <h1 className="text-4xl font-bold">{stats.users}</h1>
                        <p className="text-sm font-bold">Users</p>
                    </div>
                </div>

                <div className="flex items-center justify-center h-[150px] bg-gradient-to-r from-pink-400 to-pink-800 text-white rounded-lg shadow-md">
                    <MdMenuBook className="text-6xl mr-4" />
                    <div>
                        <h1 className="text-4xl font-bold">{stats.menuItems}</h1>
                        <p className="text-sm font-bold">All Menu</p>
                    </div>
                </div>

                <div className="flex items-center justify-center h-[150px] bg-gradient-to-r from-blue-400 to-blue-800 text-white rounded-lg shadow-md">
                    <MdBorderColor className="text-6xl mr-4" />
                    <div>
                        <h1 className="text-4xl font-bold">{stats.order}</h1>
                        <p className="text-sm font-bold">Order</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AdminHome;