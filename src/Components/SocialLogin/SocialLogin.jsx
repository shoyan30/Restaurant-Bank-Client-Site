import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const SocialLogin = () => {

    const navigate = useNavigate();
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {

        const publicSecure = useAxiosPublic()
        googleSignIn()
            .then(result => {
                console.log(result.user);

                const googleSignInInfo = {
                    nama: result.user?.displayName,
                    email: result.user?.email
                }

                publicSecure.post('/users', googleSignInInfo)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.message === "User already exists") {
                            // Navigate if the user already exists
                            navigate('/');
                        } else if (res.data.insertedId) {
                            // Navigate after successful user creation
                            navigate('/');
                        }
                    })

            })
    };

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary w-full">
                <FaGoogle className="inline-block mr-2" />
                Sign in with Google
            </button>
        </div>
    );
};

export default SocialLogin;
