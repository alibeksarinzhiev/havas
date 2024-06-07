import React from 'react'
import './Description.scss'

import AbautPic from '../../../assets/abaut_pic 14.png'

function Description() {
  return (
    <section className='about__top'>
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
            </div>

    </section>
  )
}

export default Description