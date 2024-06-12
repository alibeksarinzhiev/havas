import React from 'react'

import './SomethingAbout.scss'

import aboutPick1 from '../../../assets/shop.png'
import aboutPick2 from '../../../assets/human.png'
import aboutPick3 from '../../../assets/products.png'

function SomethingAbout() {
  return (
    <section className='something'>
    <div className="about__container container">
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
    </section>
  )
}

export default SomethingAbout