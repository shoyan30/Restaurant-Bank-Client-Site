// import React from 'react';
// import FoodCard from './FoodCard';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// const OrderTab = ({ items }) => {

//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//     };

//     return (
       
//             <Swiper
//                 pagination={pagination}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>12

//                     <div className='grid lg:grid-cols-3 gap-y-8'>
//                     {
//                         items.map(item => <FoodCard

//                             key={item._id}
//                             item={item}

//                         ></FoodCard>)
//                     }
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
      
//     );
// };

// export default OrderTab;

import React from 'react';
import FoodCard from './FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const OrderTab = ({ items }) => {
    const itemsPerPage = 6;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            {[...Array(totalPages)].map((_, pageIndex) => (
                <SwiperSlide key={pageIndex}>
                    <div className='grid lg:grid-cols-3 gap-y-8'>
                        {items
                            .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                            .map(item => (
                                <FoodCard
                                    key={item._id}
                                    item={item}
                                />
                            ))}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default OrderTab;
