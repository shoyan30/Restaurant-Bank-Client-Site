import React from 'react';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import SectionTitles from '../../../Components/SectionTitles';
const Recommends = () => {
    return (
        <section className='mb-8'>
            <SectionTitles
             subHeading={"Should Try"}
             heading={"CHEF RECOMMENDS"}
            
            
            ></SectionTitles>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={slider1}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ESCALOPE DE VEAU</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn text-yellow-800 font-bold border-4 bg-slate-300 border-b-yellow-900">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={slider2}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">PIZZAS</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn text-yellow-800 font-bold border-4 bg-slate-300 border-b-yellow-900">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={slider3}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">SOUP</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn text-yellow-800 font-bold border-4 bg-slate-300 border-b-yellow-900">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommends;