import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverBgImg1 from '../../../assets/menu/banner3.jpg'
import coverBgImg2 from '../../../assets/menu/dessert-bg.jpeg'
import coverBgImg3 from '../../../assets/menu/salad-bg.jpg'
import coverBgImg4 from '../../../assets/menu/pizza-bg.jpg'
import coverBgImg5 from '../../../assets/menu/soup-bg.jpg'

import useMenu from '../../../Hooks/useMenu';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import SectionTitles from '../../../Components/SectionTitles';

const Menu = () => {

    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Boss Restuarant / menu</title>
            </Helmet>

            <Cover
                img={coverBgImg1}
                title={'Our Menu'}
                about={'Would You Like To Try Any Dish'}
            ></Cover>

            <SectionTitles
                subHeading={"Dont Miss"}
                heading={"Todays Offer"}

            ></SectionTitles>

            <CategoryMenu
                item={offered}
            ></CategoryMenu>

            <CategoryMenu
                img={coverBgImg2}
                title={'dessert'}
                about={'Would You Like To Try Any Dish'}
                item={dessert}
            ></CategoryMenu>

            <CategoryMenu
                img={coverBgImg3}
                title={'salad'}
                about={'Would You Like To Try Any Dish'}
                item={salad}
            ></CategoryMenu>

            <CategoryMenu
                img={coverBgImg4}
                title={'pizza'}
                about={'Would You Like To Try Any Dish'}
                item={pizza}
            ></CategoryMenu>

            <CategoryMenu
                img={coverBgImg5}
                title={'soup'}
                about={'Would You Like To Try Any Dish'}
                item={soup}
            ></CategoryMenu>

        </div>
    );
};

export default Menu;