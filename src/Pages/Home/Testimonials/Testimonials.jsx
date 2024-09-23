import React, { useEffect, useState } from 'react';
import SectionTitles from '../../../Components/SectionTitles';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <section>
                <SectionTitles
                    subHeading={"What Our Clients Say--"}
                    heading={"Testimonials"}

                >

                </SectionTitles>

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >

                            <div className='m-24 text-center space-y-4'>
                                <Rating className='mx-auto'
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>


                                <p className=''>{review.details}</p>
                                <h2 className='text-2xl text-orange-700 font-bold '>{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </section>
        </div>
    );
};

export default Testimonials;