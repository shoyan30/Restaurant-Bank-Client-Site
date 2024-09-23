import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CartTable = ({ cart, onDelete }) => {
    const { name, image, price, _id } = cart;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                onDelete(id);  // Call the delete handler from the parent
            }
        });
    };

    return (
        <tr className="text-center border-b border-gray-300">
            <td className="border-r border-gray-300 p-2 w-24">
                <div className="flex justify-center items-center">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={image} alt={name} />
                        </div>
                    </div>
                </div>
            </td>
            <td className="border-r border-gray-300 p-2 w-48">
                {name}
            </td>
            <td className="border-r border-gray-300 p-2 w-8">

            </td>
            <td className="border-r border-gray-300 p-2 w-24">
                ${price}
            </td>
            <td className="p-2 w-32">
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-lg">
                    <FaTrashAlt className='text-red-700'></FaTrashAlt>
                </button>
            </td>
        </tr>
    );
};

export default CartTable;
