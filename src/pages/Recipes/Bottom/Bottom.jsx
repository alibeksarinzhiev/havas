import React from 'react';
import './Bottom.scss'
import HPelmeni from '../../../assets/Homemade pelmeni.png'
import OrangeJuice from '../../../assets/Orange juice.png'

const Bottom = () => {




    return (
        <section className='popular__recipes'>
            <div className="container">

                <h4>Популярные рецепты:</h4>
                <div className="popular__recipes__cards">
                    <div className="card">
                        <img src={HPelmeni} alt="" />
                        <h5>Пельмени по домашнему</h5>
                        <p>Вам понадобится: <br />
                        рис 400 г;
                        мясо 400 г; <br />
                        морковь 300 г; лук 1 <br /> бол...</p>
                        <button>Подробнее...</button>
                    </div>
                    <div className="card">
                        <img src={OrangeJuice} alt="" />
                        <h5>Апельсиновый сок</h5>
                        <p>Вам понадобится: <br />
                        рис 400 г;
                        мясо 400 г; <br />
                        морковь 300 г; лук 1 <br /> бол...</p>
                        <button>Подробнее...</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bottom;