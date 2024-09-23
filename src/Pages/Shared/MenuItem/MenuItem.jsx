import React from 'react';

const MenuItem = ({item}) => {

    const {_id, name, recipe, image, category, price} = item;
    return (
        <div className='flex gap-4 mb-10'>
            <img style={{borderRadius: '0px 200px 200px 200px'}} className=' w-[120px] h-[120px]' src={image} alt="" />
            <div>
                <h3 className='uppercase font-bold'>{name}-------------------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-600 font-bold'>${price}</p>
  
        </div>
    );
};

export default MenuItem;