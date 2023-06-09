import React from 'react';
import './Home.css';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';
import swimming from '../../assets/icons/swim.png';
import wifi from '../../assets/icons/wifi.png';
import ac from '../../assets/icons/ac.png';
import family from '../../assets/icons/family.png';
import group from '../../assets/icons/crowd.png';
import dinner from '../../assets/icons/meal.png';
import { HiBadgeCheck, HiEye, HiOutlineUser, HiOutlineUsers, HiShoppingCart } from "react-icons/hi";





const Home = () => {
    return (
        <div className='mb-24'>
            <div className="carousel lg:h-[80vh] rounded-md">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/*
            carousel ends here 
 */}

            <div className='grid lg:grid-cols-3 gap-x-28 gap-y-12 p-2 border-2 border-gray-200 rounded-md my-5 bg-indigo-50'>
                <div className="facilities bg-gradient-to-r from-cyan-100 to-blue-300 rounded-md">
                    <h2 className='text-3xl font-bold'>Facilities</h2>
                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-2'>
                        <div className='flex flex-col items-center'>
                            <img className='w-14' src={swimming} alt="" />
                            <p>Swimming</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='w-14' src={ac} alt="" />
                            <p>Ac</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='w-14' src={wifi} alt="" />
                            <p>Wifi</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='w-14' src={dinner} alt="" />
                            <p>Dinner</p>
                        </div>
                    </div>
                </div>
                <div className="hotels-for-you bg-gradient-to-r from-blue-100 to-cyan-200 rounded-md">
                    <h4 className='text-3xl font-bold'>Hotels For You</h4>
                    <p>5 days 6 night</p>
                    <button className="btn btn-outline hover:btn-primary rounded-lg border-gray-300"><HiBadgeCheck className='text-success text-2xl' /> &nbsp; USD $506.09</button>
                </div>
                <div className="results bg-gradient-to-r from-indigo-100 to-green-200 rounded-md">
                    <h2 className='text-3xl font-bold'>Offers</h2>
                    <div className='grid grid-cols-2 gap-2'>
                        <button className="btn btn-outline hover:btn-primary rounded-lg border-gray-300"><HiOutlineUser className='text-success text-2xl' /> &nbsp; USD $106.09</button>
                        <button className="btn btn-outline hover:btn-primary rounded-lg border-gray-300"><HiOutlineUsers className='text-success text-2xl' /> &nbsp; USD $216.09</button>
                        <button className="btn btn-outline hover:btn-primary rounded-lg border-gray-300"><img className='w-[24px] bg-green-400' src={family} alt="" /> &nbsp; USD $406.09</button>
                        <button className="btn btn-outline hover:btn-primary rounded-lg border-gray-300"><img className='w-[24px] bg-green-400' src={group} alt="" /> &nbsp; USD $796.09</button>
                    </div>
                </div>
            </div>
            {/* 
        cards section starts here    
            */}
            <div className='cards grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-blue-100 to-cyan-200">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Sunset
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Love to enjoy sunset !</p>
                        <div className="card-actions justify-end flex ">
                        <button className="btn btn-info hover:btn-primary rounded-md"><HiShoppingCart /> &nbsp; add to cart</button> 
                        <button className="btn btn-primary hover:btn-info rounded-md"><HiEye /> &nbsp; view offer</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-blue-100 to-cyan-200">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Luxury
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Vip room for you</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-info hover:btn-primary rounded-md"><HiShoppingCart /> &nbsp; add to cart</button> 
                        <button className="btn btn-primary hover:btn-info rounded-md"><HiEye /> &nbsp; view offer</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-blue-100 to-cyan-200">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Eco House
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Looks like your are in a jungle !</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-info hover:btn-primary rounded-md"><HiShoppingCart /> &nbsp; add to cart</button> 
                        <button className="btn btn-primary hover:btn-info rounded-md"><HiEye /> &nbsp; view offer</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-indigo-100 to-blue-200">
                    <figure><img src={img4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Reception
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Always there for your service </p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-info hover:btn-primary rounded-md"><HiShoppingCart /> &nbsp; add to cart</button> 
                        <button className="btn btn-primary hover:btn-info rounded-md"><HiEye /> &nbsp; view offer</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-indigo-100 to-blue-200">
                    <figure><img className='h-[257px]' src={img5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Outdoor
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Your best place to walk !</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-info hover:btn-primary rounded-md"><HiShoppingCart /> &nbsp; add to cart</button> 
                        <button className="btn btn-primary hover:btn-info rounded-md"><HiEye /> &nbsp; view offer</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-indigo-100 to-blue-200">
                    <figure><img src={img6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Rest Chair!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>For your rest</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-info hover:btn-primary rounded-md"><HiShoppingCart /> &nbsp; add to cart</button> 
                        <button className="btn btn-primary hover:btn-info rounded-md"><HiEye /> &nbsp; view offer</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;