import React from 'react';
import './about.scss'

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