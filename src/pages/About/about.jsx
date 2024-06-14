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
        <div className="about__container container">
            <div className="about__top">
            <div className="about__top-left">
                <h2 className="about__about-word">О НАС
                <span className="about__mark"></span>
                </h2>

        <h1 className="about__name">HAVAS</h1>

        <h3 className="about__title"> СЕТЬ ДИСКАУНТЕРОВ "У ДОМА"</h3>
        <p className="about__text">Мы предлагаем нашим покупателям качественные продукты по выгодной цене.
В наших магазинах представлены товары известных мировых и 
локальных брендов, а также товары собственного производства под торговой маркой HAVAS</p>

            </div>
            <div className="about__top-right">
                <img src={ AbautPic} alt="" className="about__img" />
            </div>
            </div>
            <ul className="discount__list">
            <li className="discount__item">
                <img src={discount4} alt="" className="discount__img" />
                <p className="discount__text"> Дискаунтер - это<br/> выгодный для<br/> потребителей формат<br/> магазинов, в котором<br/> продаются товары по<br/> цене ниже обычной.</p>
            </li>
            <li className="discount__item">
            <img src={discount2} alt="" className="discount__img" />
                <p className="discount__text">В дискаунтере низкие цены достигаются за счет снижения издержек, многофункциональности персонала и лучших условий с поставщиками</p>
            </li>
            <li className="discount__item">
            <img src={discount3} alt="" className="discount__img" />
                <p className="discount__text">Для удобства посетителей, ассортимент подбирается таким образом, что на полках всегда можно найти все самое необходимое</p>
            </li>
            <li className="discount__item">
            <img src={discount1} alt="" className="discount__img" />
                <p className="discount__text">Для удобства посетителей, ассортимент подбирается таким образом, что на полках всегда можно найти все самое необходимое</p>
            </li>
            </ul>
<div className="photos__list">
<img src={photo1} alt="" className="photos__img" />
<img src={photo2} alt="" className="photos__img" />
<img src={photo3} alt="" className="photos__img" />
<img src={photo4} alt="" className="photos__img" />
<img src={photo5} alt="" className="photos__img" />
<img src={photo6} alt="" className="photos__img" />
</div>

<div className="something__about">
    <div className="something__about-text">
    <h2 className="something__title">Немного о нас</h2>
    <p className="something__text">Дискаунтер — формат розничной торговли, предоставляющий потребителю качественную<br/> продукцию по максимально низким ценам, работающий в формате «магазин у дома».<br/><br/>
Один из примечательных аспектов сети Havas — низкая цена на всю продукцию, комфортные<br/> условия в магазинах, а также близость к дому. Сегодня Havas есть во всех районах Ташкента,<br/> что помогает жителям столицы покупать товары в удобных для них магазинах, не тратя на это <br/>много времени и сил.<br/>
Но все успехи сети дискаунтера — это результат любви и доверия покупателей к Havas. В<br/> свою очередь команда Havas благодарит всех покупателей и клиентов сети. Именно они<br/> вдохновляют команду Havas и побуждают к созданию новых удобств и возможностей.<br/><br/><br/>

В ближайшие годы сеть Havas планирует открыть свои удобные, доступные и комфортные<br/> магазины во всех городах и районах Узбекистана.
</p>

    </div>
    <ul className="about__shop-list">
        <ul className="about__shop-items">
            <img src={aboutPick1} alt="" className="about__shop-img" />
            <p className="about__shop-text">
            55 Магазинов
            </p>
        </ul>
        <ul className="about__shop-items">
        <img src={aboutPick2} alt="" className="about__shop-img" />
            <p className="about__shop-text">
            530 Сотрудников по<br/> всей сети магазинов
            </p>
        </ul>
        <ul className="about__shop-items">
        <img src={aboutPick3} alt="" className="about__shop-img" />
            <p className="about__shop-text">
            1200 Разновидностей<br/>продовольственных <br/>товаров
            </p>
        </ul>
    </ul>
</div>
        </div>            
=======
    <Description/>
    <Discounter/>
    <PhotoList/>
    <SomethingAbout/>      
        </section>
    );
};

export default About;