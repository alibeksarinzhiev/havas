import React from 'react';
import './baner.scss';
import SwiperBanner from "./Swiper/Swiper";
import { useLocation } from 'react-router-dom';

const Banner = () => {
    const location = useLocation();
    const pathBanner = ['/', '/shop', '/specialOffer'];
    const showBanner = pathBanner.includes(location.pathname);

    return (
        showBanner && (
            <section className='banner'>
                <SwiperBanner />
            </section>
        )
    );
};

export default Banner;
