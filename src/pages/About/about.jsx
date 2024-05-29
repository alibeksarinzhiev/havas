import React from 'react';
import './abaut.scss'

import AbautPic from '../../assets/abaut_pic 14.png'

const About = () => {
    return (
        <section className="abaut">
        <div className="abaut__container container">
            <div className="abaut__top">
            <div className="abaut__top-left">
                <h2 className="abaut__abaut-word">О НАС
                <span className="abaut__mark"></span>
                </h2>

        <h1 className="abaut__name">HAVAS</h1>

        <h3 className="abaut__title"> СЕТЬ ДИСКАУНТЕРОВ "У ДОМА"</h3>
        <p className="abaut__text">Мы предлагаем нашим покупателям качественные продукты по выгодной цене.
В наших магазинах представлены товары известных мировых и 
локальных брендов, а также товары собственного производства под торговой маркой HAVAS</p>

            </div>
            <div className="abaut__top-right">
                <img src={ AbautPic} alt="" className="abaut__img" />
            </div>

            </div>
        </div>
            
        </section>
    );
};

export default About;