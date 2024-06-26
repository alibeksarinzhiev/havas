import React from 'react';
import './SpecialOffer.scss';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

function Special() {

  const {data} = useSelector((state)=>state.products)  
  const promProducts = data.filter((el) => el.category === 'promoution');
  return (
    <section className='special__offer'>
      <div className='container'>
        <h1 className="special__offer-title">Специальные предложения</h1>

        <ul className="special__offer-list">
          <li className="special__offer-items">Акции</li>
          <li className="special__offer-items">Новинки</li>
          <li className="special__offer-items">Все</li>
        </ul>

        <div className="special__offer-products-box">
          {promProducts.map((el) => (
  <Link to={`/oneproduct/${el.id}`} className='link__special'>
            <div className="special__offer-products" key={el.id}>
              <div className="special__offer-img-box">
                <h3 className="special__offer-product-title">АКЦИОННЫЙ ТОВАР</h3>
                <p className="special__offer-discount"><span>{el.promoution}</span></p>
                <div className="special__offer-price-box">
                  <img src={el.img} alt="" className="special__offer-img" />
                  <div>
                    <h3 className="special__offer-description">“ASAL” Мёд</h3>
                    <p className="special__offer-old-price">{el.sale}</p>
                    <h2 className="special__offer-price">{Math.floor(el.price)}<span>.{el.price.toString().split('.')[1]}</span></h2>
                    <h2 className="special__offer-currency">UZS</h2>
                  </div>
                </div>
              </div>

              <div className="special__offer-bottom-box">
                <h3 className="special__offer-bottom-title">{el.title}</h3>
                <p className="special__offer-bottom-text">{el.description}</p>
                <button className="special__offer-bottom-btn">Подробнее...</button>
              </div>
            </div>
  </Link>
          ))}

          
        </div>

        <ul className="list__nav">
          <li className="list__nav-items">1</li>
          <li className="list__nav-items">2</li>
          <li className="list__nav-items">3</li>
          <li className="list__nav-items">4</li>
          <li className="list__nav-items">5</li>
          <li className="list__nav-items">6</li>
        </ul>
      </div>
    </section>
  );
}

export default Special;
