import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../firebase/AuthContext';


const Header = () => {
    const {user, LogOut} = useContext(UserContext)

    const handleLogout = () => {
        LogOut()
        .then( ()=>{
            console.log('user log out')
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-slate-200 flex justify-between mb-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link ></li>
                        <li><Link to='/houses'>Type of house</Link ></li>
                        <li><Link to='/contact'>Contact</Link ></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn hover:btn-primary normal-case text-xl">Hotel Mehbub</Link >
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><Link to='/'>Home</Link ></li>
                        <li><Link to='/about'>About</Link ></li>
                        <li><Link to='/houses'>Type of house</Link ></li>
                        <li><Link to='/contact'>Contact</Link ></li>
                    </ul>
                </div>
                {
                    user?.uid ? <button className='btn btn-outline hover:btn-primary rounded-xl' onClick={handleLogout}>Logout</button> : <button className="btn btn-outline hover:btn-primary rounded-xl"><Link to='login'>Login</Link></button>
                }
                
            </div>
        </div>
    );
};

export default Header;