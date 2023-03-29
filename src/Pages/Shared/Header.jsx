import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-slate-200 flex justify-between mb-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Type of house</a></li>
                        <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn hover:btn-primary normal-case text-xl">Hotel Mehbub</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Type of house</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <button className="btn btn-outline hover:btn-primary rounded-xl">Login</button>
            </div>
        </div>
    );
};

export default Header;