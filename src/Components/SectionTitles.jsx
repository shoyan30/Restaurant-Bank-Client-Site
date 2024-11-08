import React from 'react';

const SectionTitles = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <p className='text-yellow-600 uppercase mb-2'>--- {subHeading} ---</p>
            <h3 className='text-3xl uppercase border-y-4 py-4 text-black'>{heading}</h3>
        </div>
    );
};

export default SectionTitles;