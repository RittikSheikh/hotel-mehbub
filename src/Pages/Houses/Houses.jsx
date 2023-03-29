import React from 'react';
import { HiEye, HiShoppingCart } from 'react-icons/hi';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';

const Houses = () => {
    return (
        <div>
            <h1 className='text-3xl text-center my-5'>Types of house</h1>
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

export default Houses;