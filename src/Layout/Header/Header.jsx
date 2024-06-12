import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import instagram from '../../assets/instagram 2.png';
import facebook from '../../assets/facebook 2.png';
import telegram from '../../assets/telegram 2.png';
import logo from '../../assets/логотип 3.png';

const Header = () => {
  const location = useLocation();

  const isSelected = (path) => {
    return location.pathname === path ? 'selected' : '';
  };

  return (
    <header className='header'>
      <div className="header__container container">
        <div className="header__top">
          <img src={logo} alt="логотип" />
          <div className="header__info">
            <p>+998(71)205-95-95</p>
            <div className="header__img">
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={telegram} alt="telegram" />
            </div>
            <div className="header__search">
              <input type="text" />
              <button>Поиск</button>
            </div>
            <h3>RU</h3>
          </div>
        </div>
        <div className="header__bottom">
          <ul className='header__nav'>
            <Link to='/' className={isSelected('/')}>ГЛАВНАЯ</Link>
            <Link to='/about' className={isSelected('/about')}>О НАС</Link>
            <Link to='/shop' className={isSelected('/shop')}>МАГАЗИНЫ</Link>
            <li>НОВОСТИ</li>
            <Link to='/recipes' className={isSelected('/recipes')}>РЕЦЕПТЫ</Link>
          </ul>
          <ul className='header__nav'>
            <li>ДЛЯ ПАРТНЁРОВ</li>
            <Link to='/career' className={isSelected('/career')}>КАРЬЕРА</Link>
           
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
