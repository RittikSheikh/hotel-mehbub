import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../firebase/AuthContext';

const Signup = () => {

    const {createUser, LogInWithGoogle } = useContext(UserContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleGoogleLogIn = () => {
        LogInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log('google user created', user)
            navigate(from, {replace: true})
        })
        .catch(error => console.error(error))
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log('userCreated', user)
            navigate(from, {replace: true})
        })
        .catch(error => console.error(error))
    }


    return (
        <div className='form-container lg:w-[600px] my-20 mx-auto  bg-slate-500 p-10'>
            <h1 className='text-center text-3xl text-yellow-400'>Welcome to SignUp</h1>
            <form onSubmit={handleSignUp}>
                <div className="form-control mb-3">
                    <label className='text-xl text-gray-300' htmlFor="name">User Name</label>
                    <input className='h-10 rounded-md pl-3' type="text" name='name' />
                </div>
                <div className="form-control mb-3 ">
                    <label className='text-xl text-gray-300' htmlFor="email">Email</label>
                    <input className='h-10 rounded-md pl-3' type="email" name='email' required />
                </div>
                <div className="form-control mb-3">
                    <label className='text-xl text-gray-300' htmlFor="password">Password</label>
                    <input className='h-10 rounded-md pl-3' type="password" name='password' required />
                </div>
                <p className='text-gray-950 my-3'>Already have an account? <Link to='/login'><span className='text-yellow-400 underline'>Login!</span></Link></p>
                <div>
                </div>
                <div className='text-center'>
                    <button type='submit' className='btn w-full mb-3 rounded-md hover:btn-primary'>Login</button>
                </div>
                <button onClick={handleGoogleLogIn} className='btn w-full rounded-md hover:btn-primary'><FcGoogle className='text-2xl mr-3' /> Google</button>
            </form>
        </div>
    );
};

export default Signup;