import React from 'react';
import SectionTitles from '../../../Components/SectionTitles';
import useMenu from '../../../Hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import { MdBrowserUpdated } from 'react-icons/md';
import Swal from 'sweetalert2';
import AxiosSecure from '../../../Hooks/AxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    // const [menu, setMenu, loading] = useMenu();
    const [menu, , refetch] = useMenu();
    const axiosSecure = AxiosSecure();

    const handleDeleteItem = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/menu/${id}`);
                    console.log(res)
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire("Deleted!", "Your item has been deleted.", "success");

                        // Update the state by removing the deleted item
                        // const updatedMenu = menu.filter(item => item._id !== id);
                        // setMenu(updatedMenu); // Update the menu state
                    } else {
                        Swal.fire("Error", "Item could not be deleted.", "error");
                    }
                } catch (error) {
                    console.error("Error deleting item:", error);
                    Swal.fire("Error", "There was a problem deleting the item.", "error");
                }
            }
        });
    };

    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    return (
        <div>
            <SectionTitles
                subHeading={"Hurry Up!"}
                heading={"MANAGE ALL ITEMS"}
            />

            <div>
                <p className='text-2xl font-bold mb-4'>Total Number of Items = {menu.length}</p>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        <thead>
                            <tr className="bg-gray-400 w-full text-lg font-bold">
                                <th>S/N</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td className="flex justify-center">
                                        <img className="h-16 w-16" src={item.image} alt={item.name} />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button className="btn btn-ghost btn-lg">
                                                <MdBrowserUpdated className='text-green-700' />
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item._id)} className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className='text-red-700' />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default ManageItems;
