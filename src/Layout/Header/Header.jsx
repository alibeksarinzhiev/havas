<<<<<<< HEAD
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
=======
import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
>>>>>>> 11369eb001a8a669915c6331b755660c40a5fa92
import instagram from '../../assets/instagram 2.png';
import facebook from '../../assets/facebook 2.png';
import telegram from '../../assets/telegram 2.png';
import logo from '../../assets/логотип 3.png';

const Header = () => {
  const location = useLocation();
<<<<<<< HEAD

  const isSelected = (path) => {
    return location.pathname === path ? 'selected' : '';
  };

=======
  const user = JSON.parse(localStorage.getItem('user'))

  const logout = ()=>{
    localStorage.removeItem('user')
  }

  const isSelected = (path) => {
    return location.pathname === path ? 'selected' : '';
  };

>>>>>>> 11369eb001a8a669915c6331b755660c40a5fa92
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
<<<<<<< HEAD
            <li>НОВОСТИ</li>
            <Link to='/recipes' className={isSelected('/recipes')}>РЕЦЕПТЫ</Link>
          </ul>
          <ul className='header__nav'>
            <li>ДЛЯ ПАРТНЁРОВ</li>
            <Link to='/career' className={isSelected('/career')}>КАРЬЕРА</Link>
           
=======
            <li className='news'>НОВОСТИ</li>
            <li>
              <li className={isSelected('/recipes')}><Link to='/recipes'>РЕЦЕПТЫ</Link> </li>
                <ul className='header__nav-drop'>                 
                    <li className={isSelected('/specialOffer')}><Link to = '/specialOffer'>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</Link> </li>
                    <li className={isSelected('')}><Link to =''>ПОЛЕЗНОЕ</Link></li>
                </ul>
            </li>

          </ul>
          <ul className='header__nav'>
            <li>ДЛЯ ПАРТНЁРОВ</li>
            <li>КАРЬЕРА</li>
            <li onClick={logout}>{user?'выйти':''}</li>
            <li><Link to ='login' className={isSelected('/login')}>{user?'':'войти'}</Link></li>
            <li>{user?.user.userName}</li>
            {user?.user.userName ==='admin'?
                <li><Link to={'/addproduct'}>Добавить товар</Link></li>:''
            }

>>>>>>> 11369eb001a8a669915c6331b755660c40a5fa92
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
