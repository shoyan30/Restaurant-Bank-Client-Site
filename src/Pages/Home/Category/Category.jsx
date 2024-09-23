import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitles from '../../../Components/SectionTitles';

const Category = () => {
    return (

        <section>
            <SectionTitles
                subHeading={"From 11.00am to 12.00pm"}
                heading={"Order now"}

            >

            </SectionTitles>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h3 className='text-4xl uppercase mx-20 text-white  -mt-16 mb-17 font-bold opacity-50 '>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className='text-4xl uppercase mx-20 text-white  -mt-16 mb-17 font-bold  opacity-50'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className='text-4xl uppercase mx-20 text-white  -mt-16 mb-17 font-bold opacity-30 '>soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className='text-4xl uppercase mx-20 text-white -mt-16 mb-17 font-bold opacity-30 '>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className='text-4xl uppercase mx-20 text-white -mt-16 mb-17 font-bold opacity-30 '>salads</h3>
                </SwiperSlide>

            </Swiper>

        </section>
    );
};

export default Category;