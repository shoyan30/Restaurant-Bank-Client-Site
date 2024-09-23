import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Login = () => {

    // const capchaRef = useRef(null)

    const [disable, setDisable] = useState(true)
    const [error, setError] = useState(''); 

    const {user, signIn } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';
    // console.log(from);
    // console.log(location.state)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signIn(email, password);
            console.log(result.user);
            
            // Clear the error and navigate to the intended page
            setError('');
            navigate(from, { replace: true });

            form.reset(); // Reset form after successful login
        } catch (error) {
            console.error("Login failed:", error);
            // Set the error message to be displayed in the UI
            setError('Invalid email or password. Please try again.');

            // Optional: Show error using SweetAlert for better UX
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid email or password!',
                showConfirmButton: true,
            });
        }
    };


    const handleValidatCapcha = e => {
        const capchaValue = e.target.value;
        // console.log(capchaValue);

        if (validateCaptcha(capchaValue) == true) {
            setDisable(false)
        } 

        else {
            alert('Captcha Does Not Match');
        }
    }
    return (
        <>
            <Helmet>
                <title>
                     Restaurant / Sign in
                </title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen ">
                <div className="hero-content mt-20 lg:w-3/4 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign In!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt beatae autem laborum, molestias eum omnis dolorem excepturi commodi accusantium dolore.</p>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">

                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            {/* Capcha */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidatCapcha} type="text" name='capcha'  placeholder=" Type the Capcha above" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">

                                <input  className="btn btn-primary" type="submit" value="Sign In" />
                                {/* disabled={disable} */}
                            </div>
                            <div className="divider">OR</div>
                            <SocialLogin></SocialLogin>
                            <div className='text-center'>
                                <p>Dont have an Acount..!! <Link className='text-red-700' to='/signup'>Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;