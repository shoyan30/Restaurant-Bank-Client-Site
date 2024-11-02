import React, { useContext } from 'react';
import SectionTitles from '../../../Components/SectionTitles';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import AxiosSecure from '../../../Hooks/AxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = AxiosSecure()
    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            const menuItems = {
                name: data.name,
                category:data.category.toLowerCase(),
                price:parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url


            }
            console.log(menuItems)
            const menuRes = await axiosSecure.post('/menu', menuItems)

            console.log(menuRes.data)
            
            if(menuRes.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  reset();
                  
            }
        }
        
        // console.log(data)
        // console.log(res.data)
    }

    return (
        <div>
            <SectionTitles
                subHeading={"Whats New?"}
                heading={"Add An Item"}

            ></SectionTitles>

            <div className="flex justify-center">
                <div className="w-3/4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Recipe Name"
                                {...register("name", { required: true })}
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="flex gap-2">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Category*</span>
                                </label>
                                <select
                                    {...register("category", { required: true })}
                                    className="select select-bordered w-full"
                                >
                                    <option selected>Salad</option>
                                    <option>Pizza</option>
                                    <option>Dessert</option>
                                    <option>Soup</option>
                                    <option>Drinks</option>
                                </select>
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Price*</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Price"
                                    {...register("price", { required: true })}
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details*</span>
                            </label>
                            <textarea
                                {...register("recipe", { required: true })}
                                placeholder="Recipe Details"
                                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                            ></textarea>
                        </div>

                        <div className='form-control'>
                            <input type="file" {...register("image", { required: true })} className="file-input w-full my-4 max-w-xs" />
                        </div>
                        <div className="form-control max-w-fit">

                            <input className="btn btn-primary" type="submit" value="Add Items" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddItems;