import React, { useContext } from 'react';
import Cover from '../Shared/Cover/Cover';
import ContactBgImg from '../../assets/contact/banner.jpg'
import SectionTitles from '../../Components/SectionTitles';
// import { FaAddressBook, FaHome, FaPhone, FaStopwatch, FaSwatchbook, FaTimes } from 'react-icons/fa';
import { FaMessage, FaTimeline } from 'react-icons/fa6';
import ContactCard from './ContactCard';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import AxiosSecure from '../../Hooks/AxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
// import AxiosSecure from '../../Hooks/AxiosSecure';

const Contact = () => {

    <Helmet>
        <title>
            Boss Restaurant / Contact
        </title>
    </Helmet>

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const axiosSecure = AxiosSecure()

    const onSubmit = (data) => {

        const message = data;
        console.log(message);

        axiosSecure.post('/message', message)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: 'Message Sent Successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset();  // Reset the form after successful submission
                }
            })
            .catch(error => {
                console.error("Error sending message:", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again.",
                });
            });

    }

    return (
        <div>
            <div>
                <Cover
                    img={ContactBgImg}
                    title={'Contact us'}
                    about={'Would You Like To Try Any Dish'}
                ></Cover>
            </div>

            <div className='mt-24'>
                <SectionTitles
                    subHeading={"visit us"}
                    heading={"our location"}

                ></SectionTitles>
            </div>

            <ContactCard></ContactCard>

            <div className='mt-24'>
                <SectionTitles
                    subHeading={"Send us a massage"}
                    heading={"contact form"}

                ></SectionTitles>
            </div>

            <div className="bg-base-200 min-h-screen mb-24 m-auto w-3/4">
                <div className="hero-content ">

                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>

                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    name='name'
                                    placeholder="Your Name"
                                    defaultValue={user?.displayName}
                                    className="input input-bordered"
                                />
                                {errors.name && (
                                    <span className="text-red-700 font-bold">
                                        This field is required
                                    </span>
                                )}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} placeholder="email" defaultValue={user?.email} className="input input-bordered" />
                                {errors.email && (
                                    <span className="text-red-700 font-bold">
                                        This field is required
                                    </span>
                                )}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" {...register("phone", { required: true })} placeholder="Phone" className="input input-bordered" />
                                {errors.phone && (
                                    <span className="text-red-700 font-bold">
                                        This field is required
                                    </span>
                                )}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea
                                    {...register("message", { required: true })}
                                    placeholder="Enter your message"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="4"

                                ></textarea>
                                {errors.message && (
                                    <span className="text-red-700 font-bold">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send Message <FaMessage></FaMessage></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;