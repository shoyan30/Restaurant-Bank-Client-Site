import React from 'react';
import useCart from '../../../Hooks/useCart';
import SectionTitles from '../../../Components/SectionTitles';
import CartTable from './CartTable';

const Cart = () => {
    const [cart, deleteCartItem] = useCart();  // Now you also have deleteCartItem

    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

    const handleDelete = async (id) => {
        try {
            await deleteCartItem(id);  // Call the delete mutation
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <div>
            <SectionTitles
                subHeading={"MY CART"}
                heading={"wanna add more..??"}
            />
            <div className='flex justify-between px-4 mb-8'>
                <h2 className='text-3xl font-bold'>Total Item: {cart.length}</h2>
                <h2 className='text-3xl font-bold'>Total Price: ${totalPrice}</h2>
                <button className='bg-amber-700 px-4 text-white'>Pay</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border-gray-300">
                    <thead className="bg-gray-200">
                        <tr className="text-center">
                            <th className="border border-gray-300 p-2 w-24">ITEM IMAGE</th>
                            <th className="border border-gray-300 p-2 w-48">ITEM NAME</th>
                            <th className="border border-gray-300 p-2 w-8">QUANTITY</th>
                            <th className="border border-gray-300 p-2 w-24">PRICE</th>
                            <th className="border border-gray-300 p-2 w-32">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(cartItem => (
                            <CartTable
                                key={cartItem._id}
                                cart={cartItem}
                                onDelete={handleDelete}  // Pass down the delete handler
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
