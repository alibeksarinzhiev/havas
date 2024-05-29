import React from 'react';
import {Link} from "react-router-dom";
import './header.scss'
import instagram from '../../assets/instagram 2.png'
import facebook from '../../assets/facebook 2.png'
import telegram from '../../assets/telegram 2.png'
import logo from '../../assets/логотип 3.png'

const Header = () => {
    return (

            <header className='header'>
               <div className="header__container container">
                   <div className="header__top">
                       <img src={logo} alt=""/>
                       <div className="header__info">
                           <p>+998(71)205-95-95</p>
                           <div className="header__img">
                               <img src={instagram} alt=""/>
                               <img src={facebook} alt=""/>
                               <img src={telegram} alt=""/>
                           </div>
                           <div className="header__search">
                               <input type="text"/>
                               <button>Поиск</button>
                           </div>
                           <h3>RU</h3>
                       </div>
                   </div>
                   <div className="header__bottom">
                       <ul className='header__nav'>
                           <Link to='/'>ГЛАВНАЯ</Link>
                           <Link to='/about'>О НАС</Link>
                           <Link to='shop'>МАГАЗИНЫ</Link>
                           <li>НОВОСТИ</li>
                           <Link to='/recipes'>РЕЦЕПТЫ</Link>
                       </ul>
                       <ul className='header__nav'>
                           <li>ДЛЯ ПАРТНЁРОВ</li>
                           <li>КАРЬЕРА</li>
                       </ul>
                   </div>
               </div>

            </header>

    );
};

export default Header;
