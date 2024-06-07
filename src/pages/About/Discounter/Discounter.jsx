import React from 'react'
import './Discounter.scss'


import discount1 from '../../../assets/assortment2.png'
import discount2 from '../../../assets/low_price.png'
import discount3 from '../../../assets/assortment.png'
import discount4 from '../../../assets/discount.png'

function Discounter() {
  return (
    <section className='discounter'>
              <div className="about__container container">
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
            </div>
    </section>
  )
}

export default Discounter