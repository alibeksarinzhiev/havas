import React from 'react';
import './baner.scss'
import SwiperBanner from "./Swiper/Swiper";
import {useSelector} from "react-redux";

const Banner = () => {
    const {data} = useSelector((state)=>state.products)

    return (
        <section className='banner'>
        <SwiperBanner/>

            <div>{data.map((el)=>(
                <h2>{el.title}</h2>
            ))}</div>
        </section>
    );
};

export default Banner;