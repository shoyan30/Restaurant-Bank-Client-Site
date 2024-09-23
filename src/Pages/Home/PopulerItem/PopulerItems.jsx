// import React, { useEffect, useState } from 'react';
import SectionTitles from '../../../Components/SectionTitles';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';
import CategoryMenu from '../../Menu/CategoryMenu/CategoryMenu';

const PopulerItems = () => {

    const [menu] = useMenu()

    const popular = menu.filter(item =>item.category === 'popular')
    
    return (
        <div>
            <section>
                <SectionTitles
                    subHeading={"Popular Items"}
                    heading={'From our menu'}

                ></SectionTitles>
                {/* <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>

                    {
                        popular.map(item => <MenuItem

                            key={item._id}
                            item={item}

                        ></MenuItem>
                        )
                    }
                </div> */}

                <CategoryMenu
                item={popular}
                
                ></CategoryMenu>
            </section>
        </div>
    );
};

export default PopulerItems;