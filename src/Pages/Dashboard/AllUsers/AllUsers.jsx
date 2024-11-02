import React from 'react';
import SectionTitles from '../../../Components/SectionTitles';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import AxiosSecure from '../../../Hooks/AxiosSecure';

const AllUsers = () => {
    const axiosSecure = AxiosSecure()
    const queryClient = useQueryClient(); // Access the query client

    // Fetching users data
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    // Mutation for deleting a user
    const deleteUserMutation = useMutation({
        mutationFn: async (userId) => {
            await axiosSecure.delete(`/users/${userId}`); // Assuming DELETE API
        },
        onSuccess: () => {
            // Invalidate and refetch the users data after deletion
            queryClient.invalidateQueries(['users']);
            Swal.fire('Deleted!', 'User has been deleted.', 'success');
        }
    });      

    const handleDeleteUser = (_id) => {
        // Trigger SweetAlert for confirmation
        Swal.fire({
            title: 'Are you sure?',
            text: "You Want Delete This User?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUserMutation.mutate(_id); // Trigger mutation if confirmed
            }
        });
    };
    const handleMakeAdmin = user => {
        console.log(user);
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User has been promoted to Admin",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    queryClient.invalidateQueries(['users']);
                    // Only refetch if there's a modification
                } else {
                    Swal.fire({
                        position: "top-end",
                        icon: "info",
                        title: "No changes were made",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.error("Error making user admin:", error);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Failed to promote user to Admin",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };

    return (
        <div>
            <SectionTitles
                subHeading={"how many"}
                heading={"manage all users"}
            />
            <div className='px-4 mb-8'>
                <h2 className='text-3xl font-bold'>Total Users: {users.length} </h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border-gray-300">
                    {/* head */}
                    <thead className="bg-gray-200">
                        <tr className="text-center">
                            <th className='w-8'>S/N</th>
                            <th className="border border-gray-300 p-2 w-48">Name</th>
                            <th className="border border-gray-300 p-2 w-24">Email</th>
                            <th className="border border-gray-300 p-2 w-24">Role</th>
                            <th className="border border-gray-300 p-2 w-32">ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id} className="text-center border-b border-gray-300">
                                    <th className='w-8'>{index + 1}</th>

                                    <td className="border-r border-gray-300 p-2 w-48">
                                        {user.name}
                                    </td>

                                    <td className="border-r border-gray-300 p-2 w-24">
                                        {user.email}
                                    </td>

                                    <td className="border-r border-gray-300 p-2 flex justify-center items-center h-full">
                                        {
                                            user.role === "admin" ? "Admin" : 
                                            <button onClick={() => handleMakeAdmin(user)} className='btn btn-lg bg-orange-400'>
                                                <FaUsers className='h-full text-white'></FaUsers>
                                            </button>
                                        }
                                    </td>

                                    <td className="p-2 w-32">
                                        <button
                                            onClick={() => handleDeleteUser(user._id)}
                                            className="btn btn-ghost btn-lg"
                                            disabled={deleteUserMutation.isLoading} // Disable button while deleting
                                        >
                                            <FaTrashAlt className='text-red-700' />
                                        </button>
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
