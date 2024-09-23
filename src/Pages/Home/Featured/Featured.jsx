import React from 'react';
import SectionTitles from '../../../Components/SectionTitles';
import img from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='border-4 mb-16 text-black  bg-fixed featuredItem'>
            <SectionTitles
                subHeading={"Check it Out"}
                heading={"From Our menu"}

            >

            </SectionTitles>

            <div className='md:flex justify-center  items-center mb-20   pt-12 px-36 gap-x-10 '>
                <div>
                    <img className='img' src={img} alt="" />
                </div>

                <div>
                    <p>March 30, 2023</p>
                    <div className="uppercase">Where Can i Get Some</div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit ullam provident repudiandae? Doloremque et quasi, voluptatem cum excepturi saepe obcaecati.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-8 '>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;