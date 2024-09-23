import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
const CategoryMenu = ({ item, img, title, about }) => {
    // console.log(item);
    return (
        <div>

            {title &&<Cover img={img} title={title} about={about}></Cover>}
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-8'>

                {
                    item.map(item => <MenuItem

                        key={item._id}
                        item={item}

                    ></MenuItem>
                    )
                }
            </div>
            <div className=' flex justify-center'>
                <Link to={`/order/${title}`}>
                    <button className='btn btn-outline border-4 mb-8  border-b-4 my-4'>Order Details</button>
                </Link>

            </div>
        </div>
    );
};

export default CategoryMenu;