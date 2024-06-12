import React from 'react';
import './Special.scss'
import img from '../../../assets/кукуруза_1.png'

const Special = () => {
    return (
        <section className='special'>
            <div className="container">
                <div className="special__title">
                    <h2>СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</h2>
                    <p>*ЦЕНА АКТУАЛЬНА НА ОПРЕДЕЛЕННЫЙ СРОК</p>
                </div>
                <div className="special__products">
                    <div className="special__product">
                        <div className="special__top">
                            <h3>АКЦИОННЫЙ
                                ТОВАР</h3>
                            <h4>-30%</h4>
                        </div>
                        <div className="special__bottom">
                            <img src={img} alt=""/>
                            <div className="special__info">
                                <h4>“ASAL”  Мёд</h4>
                                <span className='special___info__priceOld'>3000</span>
                                <h3>17.<span className='special__info__priceNew'>500</span></h3>
                                <p>UZS</p>
                            </div>
                        </div>
                    </div>
                    <div className="special__product">
                        <div className="special__top">
                            <h3>АКЦИОННЫЙ
                                ТОВАР</h3>
                            <h4>-30%</h4>
                        </div>
                        <div className="special__bottom">
                            <img src={img} alt=""/>
                            <div className="special__info">
                                <h4>“ASAL”  Мёд</h4>
                                <span className='special___info__priceOld'>3000</span>
                                <h3>17.<span className='special__info__priceNew'>500</span></h3>
                                <p>UZS</p>
                            </div>
                        </div>
                    </div>
                    <div className="special__product">
                        <div className="special__top">
                            <h3>АКЦИОННЫЙ
                                ТОВАР</h3>
                            <h4>-30%</h4>
                        </div>
                        <div className="special__bottom">
                            <img src={img} alt=""/>
                            <div className="special__info">
                                <h4>“ASAL”  Мёд</h4>
                                <span className='special___info__priceOld'>3000</span>
                                <h3>17.<span className='special__info__priceNew'>500</span></h3>
                                <p>UZS</p>
                            </div>
                        </div>
                    </div>
                    <div className="special__product">
                        <div className="special__top">
                            <h3>АКЦИОННЫЙ
                                ТОВАР</h3>
                            <h4>-30%</h4>
                        </div>
                        <div className="special__bottom">
                            <img src={img} alt=""/>
                            <div className="special__info">
                                <h4>“ASAL”  Мёд</h4>
                                <span className='special___info__priceOld'>3000</span>
                                <h3>17.<span className='special__info__priceNew'>500</span></h3>
                                <p>UZS</p>
                            </div>
                        </div>
                    </div>
                    <div className="special__product">
                        <div className="special__top">
                            <h3>АКЦИОННЫЙ
                                ТОВАР</h3>
                            <h4>-30%</h4>
                        </div>
                        <div className="special__bottom">
                            <img src={img} alt=""/>
                            <div className="special__info">
                                <h4>“ASAL”  Мёд</h4>
                                <span className='special___info__priceOld'>3000</span>
                                <h3>17.<span className='special__info__priceNew'>500</span></h3>
                                <p>UZS</p>
                            </div>
                        </div>
                    </div>
                    <div className="special__product">
                        <div className="special__top">
                            <h3>АКЦИОННЫЙ
                                ТОВАР</h3>
                            <h4>-30%</h4>
                        </div>
                        <div className="special__bottom">
                            <img src={img} alt=""/>
                            <div className="special__info">
                                <h4>“ASAL”  Мёд</h4>
                                <span className='special___info__priceOld'>3000</span>
                                <h3>17.<span className='special__info__priceNew'>500</span></h3>
                                <p>UZS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Special;