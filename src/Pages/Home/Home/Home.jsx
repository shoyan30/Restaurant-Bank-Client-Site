/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Boss from '../Boss/Boss';
import PopulerItems from '../PopulerItem/PopulerItems';
import Recommends from '../Reccomends/Recommends';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Boss Restaurant / home
                </title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Boss></Boss>
            <PopulerItems></PopulerItems>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;