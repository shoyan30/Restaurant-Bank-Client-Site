/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../../../assets/home/chef-service.jpg'

const Boss = () => {
    return (

        <div className='relative w-full' style={{ height: '0', paddingBottom: '43.33%' }}>
            <img className='absolute top-0 left-0 w-full h-full object-cover' src={img} alt="" />
            <div className='flex justify-center items-center absolute inset-0'>
                <div className='bg-white bg-opacity-75 text-center p-6 sm:p-10 max-w-lg'>
                    <h1 className='text-2xl sm:text-5xl mb-4'>Bistro Boss</h1>
                    <h2 className='text-sm sm:text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore iure sequi aut error id officiis vel,
                        ex reprehenderit, odio velit consequatur illo doloribus eligendi ipsum, assumenda iste eos nobis.
                    </h2>
                </div>
            </div>
        </div>

    );
};

export default Boss;