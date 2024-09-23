import { Link, useNavigate } from 'react-router-dom';
import { Result } from 'postcss';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';


const Registration = () => {
    const { register, handleSubmit, watch, reset, formState: { errors }, } = useForm()

    const { createUser, updateUserProfile, logOut, loading } = useContext(AuthContext)

    const axiosPublic = useAxiosPublic()

    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            const result = await createUser(data.email, data.password);
            console.log(result.user);

            await updateUserProfile(data.name, data.photoUrl);
            console.log('User profile info updated');

            const userInfo = {
                name: data.name,
                email: data.email,
                photoUrl: data.photoUrl
            };

            const res = await axiosPublic.post('/users', userInfo);
            console.log(res.data);

            if (res.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'Registration Successful',
                    showConfirmButton: false,
                    timer: 1500
                });
                logOut();
                reset();
                navigate('/');
            }
        } catch (error) {
            console.error("Error occurred:", error);
        }
    };



    return (
        <>
            <Helmet>
                <title>
                    Restaurant / Sign Up
                </title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content lg:w-3/4 mt-20 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere rem incidunt quam provident consequuntur quis magnam. Officia pariatur architecto consectetur?</p>
                    </div>
                    <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-700 font-bold'>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoUrl", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoUrl && <span className='text-red-700 font-bold'>Photo Url is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-700 font-bold'>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-red-700 font-bold'>This field is required</span>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <div className="divider">OR</div>
                            <SocialLogin></SocialLogin>
                            <div className='text-center'>
                                <p>Already have an Acount..!! <Link className='text-red-700' to='/login'>Sign In</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;