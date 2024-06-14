import React from 'react';
import './about.scss'


import AbautPic from '../../assets/abaut_pic 14.png'
import discount1 from '../../assets/assortment2.png'
import discount2 from '../../assets/low_price.png'
import discount3 from '../../assets/assortment.png'
import discount4 from '../../assets/discount.png'

import photo1 from '../../assets/photo1.png'
import photo2 from '../../assets/photo2.png'
import photo3 from '../../assets/photo3.png'
import photo4 from '../../assets/photo4.png'
import photo5 from '../../assets/photo5.png'
import photo6 from '../../assets/photo6.png'

import aboutPick1 from '../../assets/shop.png'
import aboutPick2 from '../../assets/human.png'
import aboutPick3 from '../../assets/products.png'

import Discounter from './Discounter/Discounter';
import Description from './Description/Description';
import PhotoList from './PhotoList/PhotoList';
import SomethingAbout from './SomethingAbout/SomethingAbout';

const About = () => {
    return (
        <section className="about">        
    <Description/>
    <Discounter/>
    <PhotoList/>
    <SomethingAbout/>      
        </section>
    );
};

export default About;