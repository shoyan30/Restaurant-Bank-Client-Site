import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AxiosSecure from '../../../Hooks/AxiosSecure';
import { useQueryClient } from '@tanstack/react-query';


const FoodCard = ({ item }) => {

    const axiosSecure = AxiosSecure()
    const { name, recipe, image, category, price, _id } = item;

    const { user } = useContext(AuthContext);
    const location = useLocation()
    const queryClient = useQueryClient();
    const navigate = useNavigate()


    const handleAddToCart = () => {

        if (user && user.email) {
            // console.log(food, user.email)
            const foodItem = {
                user:user.displayName,
                menuId: _id,
                email: user.email,
                name,
                price,
                image,
                category,
                price

            }

            axiosSecure.post('/carts', foodItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} Added to your Cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        queryClient.invalidateQueries(['cart', user.email]);
                    }
                    
                })

            
        }
        else {
            Swal.fire({
                title: "Loggin First Pleasess",

                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                // confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {

                    navigate('/login', { state: { from: location }, replace: true })
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt=""
                    className="rounded-xl" />
            </figure>
            <p className='bg-slate-950 text-purple-400 font-extrabold p-2 absolute right-0 mr-8 mt-8'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={handleAddToCart} className="btn text-yellow-800 font-bold border-4 bg-slate-300 border-b-yellow-900">
                        ADD TO CART
                    </button>

                </div>
            </div>
        </div>
    );
};

export default FoodCard;