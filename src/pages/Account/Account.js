import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useHistory } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Account = () => {
    const { setError, googleSignIn, setIsloading } = useFirebase();
    const [toggle, setToggle] = useState('login');
    const handleToggle = () => {
        toggle === 'login' ? setToggle('register') : setToggle('login');
    }
    const history = useHistory();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => history.push('/'))
            .catch(error => setError(error.message))
            .finally(() => setIsloading(false));
    }
    return (
        <div className="flex justify-center min-h-screen bg-gray-100">
            <div className="container sm:mt-10 mt-12 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">

                <div className="text-center my-6">
                    <h1 className="text-3xl font-semibold text-gray-700">{toggle === 'login' ? "Sign In" : 'Sign Up'}</h1>
                    <p className="text-gray-500">{toggle === 'login' ? "Sign In to access your account" : 'Sign Up to create an account'}</p>
                </div>

                <div className="m-6">
                    {toggle === 'login' ? <Login /> : <Register />}
                    <p className="text-sm text-center text-gray-400 mb-4">
                        {toggle === 'login' ? "Don't have an account? " : 'Already have an account? '}

                        <a href="#!" className="font-semibold" onClick={handleToggle}>{toggle === 'login' ? <span className="text-indigo-500">Sign Up</span> : <span className="text-green-500">Sign In</span>}</a>.



                    </p>

                    <div className="flex flex-row justify-center mb-8">
                        <span className="absolute bg-white px-4 text-gray-500">or sign-in with</span>
                        <div className="w-full bg-gray-200 mt-3 h-px"></div>
                    </div>

                    <div className="social-signin">
                        <button onClick={handleGoogleSignIn} className="bg-gray-100 text-black w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-200 duration-100 ease-in-out">
                            <FcGoogle></FcGoogle>
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;