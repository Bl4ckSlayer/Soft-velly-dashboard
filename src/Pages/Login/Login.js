import React, { Component, useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiHomeHeartFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import loginImg from '../../assets/login.gif'
// import AllTitle from '../../Hooks/AllTitle';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import circleLoading from '../../assets/loading-circle.gif'

const Login = () => {

    const { logIn, providerLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    // AllTitle('Log In')

    const googleLogIn = new GoogleAuthProvider();

    //Loader to show while loading
    const [isLoading, setIsLoading] = useState(false);

    //jwt
    // const [loginUserEmail, setLoginUserEmail] = useState('')


    // if(token){
    //     navigate(from, { replace: true })
    // }


    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setIsLoading(true);

        const url = `http://crm.softvalley.sveducrm.com/api/admin/login`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.success === true) {
                    toast.success('Successfully Logged In');
                    localStorage.setItem("Save token", data.data.token);
                    setIsLoading(false)
                    setTimeout(() => {
                        navigate('/')
                    }, 2000);
                }

                if (data.success === false) {
                    toast.error('Credentials not match');
                    setIsLoading(false);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        // logIn(email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //         if (user) {
        //             setIsLoading(false);
        //             // setLoginUserEmail(email)
        //             toast.success('Successfully Logged In')
        //             navigate(from, { replace: true })

        //         }
        //         form.reset();
        //     })
        //     .catch(err => {
        //         console.error(err.message);
        //         if (err.message === "Firebase: Error (auth/user-not-found).") {

        //             toast.error('User Not found');
        //             setIsLoading(false);
        //             form.reset();

        //         }
        //         if (err.message === "Firebase: Error (auth/wrong-password).") {

        //             toast.error('Wrong Password');
        //             setIsLoading(false);
        //             form.password.value = '';
        //         };
        //         if (err.message === 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).') {
        //             toast.error('Try again later for this account. Thank You ☠️');
        //             setIsLoading(false);
        //         };
        //         if (err.message === "Firebase: Error (auth/network-request-failed).") {
        //             toast.error('Network Request Failed. Try Again');
        //             setIsLoading(false);
        //         }

        //     })

    }



    return (
        <div>
            <div className='flex justify-center mb-6 mt-6'>

                <h2 className='text-6xl font-bold'><Link to='/'><span className='text-orange-600'><i>Soft</i></span> <span className='text-blue-900'><i>Valley</i></span></Link></h2>

            </div>

            <div className='flex justify-center mb-4'>
                <div className="tooltip tooltip-right tooltip-primary border-dashed border-b-4 border-indigo-500" data-tip="Go to home">
                    <Link to='/'><h2 className='btn border-none bg-transparent hover:bg-transparent text-5xl text-blue-500 text-center'><RiHomeHeartFill /></h2></Link>
                </div>

            </div>

            <div className='flex justify-center'>
                <div className="hero py-20 bg-blue-200 shadow-2xl rounded-xl mx-20 mb-20">
                    <div className="hero-content flex-col 2xl:flex-row-reverse gap-10 2xl:gap-60">
                        <div className="lg:text-left">
                            <img src={loginImg} className="w-full" alt="" />
                        </div>

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-400">
                            <form onSubmit={handleLogIn} className="card-body">
                                <div className='flex gap-4'>
                                    <h1 className="text-3xl md:text-4xl font-bold mb-10">Log In</h1>

                                    <h3>{isLoading ?
                                        <img src={circleLoading} alt="" className='w-[50px]' /> : ''
                                    }</h3>

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Your Email 📧</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Type your email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Your Password 🔐</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Type your password" className="input input-bordered" required />
                                    <div className="form-control mt-6">
                                        <button className="btn glass hover:bg-blue-600 text-black" type="submit">Log In</button>
                                    </div>
                                </div>
                                <h3 className='text-2xl text-center font-bold text-red-400 mt-4'></h3>
                            </form>
                            {/* <h3 className='text-center text-2xl font-bold mb-6'>OR</h3>
                            <button onClick={handleGoogle} className='btn btn-secondary mb-6 mx-8 flex justify-evenly font-bold'><span className='text-2xl'><FaGoogle /></span><span>Log In with Google</span></button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-lg ml-8">Forgot password?</a>
                            </label>
                            <h3 className='text-lg font-bold mt-6 mb-10 text-center'>Don't have an account? <Link className='text-blue-600 font-bold' to='/signup'>Sign Up</Link> here</h3> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;