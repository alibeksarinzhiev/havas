import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';




const SwiperBanner = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="banner__one">

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner__one">

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner__one">

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner__one">

                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
};

export default SwiperBanner;