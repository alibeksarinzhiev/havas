import React from 'react';
import './Middle.scss'
import Ellipse from '../../../assets/Ellipse 7.png'
import Shurpa from '../../../assets/Shurpa.png'
import Pirog from '../../../assets/Pirog.png'
import Plov from '../../../assets/Plov.png'
import Okroshka from '../../../assets/Okroshka.png'
import Manty from '../../../assets/Manty.png'
import Pelmeni from '../../../assets/Pelmeni.png'

const Middle = () => {
    return (
        <section className='middle__section'>
            <div className="container">
                <div className="all__recipes">
                <div className="recipes__category">
                    <h1 className='recipes__main__title'>РЕЦЕПТЫ</h1>
                    <h4>Выберите категорию:</h4>
                </div>
                    <ul>
                        <li>
                            <h5>все рецепты</h5>
                            <h5>20</h5>
                        </li>
                        <li>
                            
                            <h5><img className='ellipse' src={Ellipse} alt="" />   15 минут и готово</h5>
                            <h5>12</h5>
                        </li>
                        <li>
                            <h5>3 шага и готово</h5>
                            <h5>8</h5>
                        </li>
                        <li>
                            <h5>30 минут и готово</h5>
                            <h5>15</h5>
                        </li>
                        <li>
                            <h5>5 ингредиентов</h5>
                            <h5>2</h5>
                        </li>
                        <li>
                            <h5>60 минут и готово</h5>
                            <h5>6</h5>
                        </li>
                        <li>
                            <h5>десерты</h5>
                            <h5>22</h5>
                        </li>
                        <li>
                            <h5>завтраки</h5>
                            <h5>15</h5>
                        </li>
                        <li>
                            <h5>ланч</h5>
                            <h5>38</h5>
                        </li>
                        <li>
                            <h5>салаты</h5>
                            <h5>20</h5>
                        </li>
                        <li>
                            <h5>здоровая пища</h5>
                            <h5>14</h5>
                        </li>
                        <li>
                            <h5>национальная кухня</h5>
                            <h5>9</h5>
                        </li>
                        <li>
                            <h5>летние рецепты</h5>
                            <h5>15</h5>
                        </li>
                        <li>
                            <h5>соусы</h5>
                            <h5>7</h5>
                        </li>
                    </ul>
                </div>
                <div className="meals">
                    <h4 className='all__recipes__piece'>15 минут и готово</h4>
                    <div className="meals__cards">
                        <img src={Shurpa} alt="" />
                        <div className="description">
                        <h5 className='name'>Шурпа</h5>
                        <p>Вам понадобится: <br />
                        рис 400 г;
                        мясо 400 г; <br />
                        морковь 300 г; лук 1 <br /> бол...</p>
                        </div>
                        <button>Подробнее...</button>
                    </div>
                    <div className="meals__cards">
                        <img src={Pirog} alt="" />
                        <div className="description">
                        <h5 className='name'>Мясной пирог</h5>
                        <p>Вам понадобится: <br />
                        рис 400 г;
                        мясо 400 г; <br />
                        морковь 300 г; лук 1 <br /> бол...</p>
                        </div>
                        <button>Подробнее...</button>
                    </div>
                    <div className="meals__cards">
                        <img src={Plov} alt="" />
                        <div className="description">
                        <h5 className='name'>Узбекский плов</h5>
                        <p>Вам понадобится: <br />
                        рис 400 г;
                        мясо 400 г; <br />
                        морковь 300 г; лук 1 <br /> бол...</p>
                        </div>
                        <button>Подробнее...</button>
                    </div>
                    <div className="meals__cards">
                        <img src={Okroshka} alt="" />
                        <div className="description">
                        <h5 className='name'>Окрошка</h5>
                        <p>Вам понадобится: <br />
                        рис 400 г;
                        мясо 400 г; <br />
                        морковь 300 г; лук 1 <br /> бол...</p>
                        </div>
                        <button>Подробнее...</button>
                    </div>
                    <div className="meals__cards">
                        <img src={Manty} alt="" />
                        <div className="description">
                        <h5 className='name'>Манты</h5>
                        <p>Вам понадобится: <br />
                        рис 400 г;
                        мясо 400 г; <br />
                        морковь 300 г; лук 1 <br /> бол...</p>
                        </div>
                        <button>Подробнее...</button>
                    </div>
                    <div className="meals__cards">
                        <img src={Pelmeni} alt="" />
                        <div className="description">
                        <h5 className='name'>Пельмени</h5>
                        <p>Вам понадобится: <br />
                        рис 400 г;
                        мясо 400 г; <br />
                        морковь 300 г; лук 1 <br /> бол...</p>
                        </div>
                        <button>Подробнее...</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Middle;