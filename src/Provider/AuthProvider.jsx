import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';



export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const axiosPublic= useAxiosPublic();

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        // setLoading(true);
    
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            // console.log('Auth State Changed:', currentUser);
    
            if (currentUser) {
                setUser(currentUser);
    
                try {
                    const userInfo = { email: currentUser.email };
                    const res = await axiosPublic.post('/jwt', userInfo);
    
                    if (res.data.token) {
                        localStorage.setItem('Access-Token', res.data.token);
                        console.log('Token stored:', res.data.token);
                    }
                } catch (error) {
                    console.error('Error fetching JWT:', error);
                }
            } else {
                setTimeout(() => {
                    if (!auth.currentUser) {
                        localStorage.removeItem('Access-Token');
                        // console.log('No user found. Token removed.');
                    }
                }, 500); // Adds a delay to handle potential state sync issues
            }
    
            setLoading(false); // Only after token/user is stable
        });
    
        return () => unsubscribe();
    }, []);
    
    
    

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;