import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.scss';
import instagram from '../../assets/instagram 2.png';
import facebook from '../../assets/facebook 2.png';
import telegram from '../../assets/telegram 2.png';
import logo from '../../assets/логотип 3.png';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [location]);

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

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
            <li className='news'>НОВОСТИ</li>
            <li className={isSelected('/recipes')}><Link to='/recipes'>РЕЦЕПТЫ</Link>
              <ul className='header__nav-drop'>                 
                <li className={isSelected('/specialOffer')}><Link to='/specialOffer'>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</Link></li>
                <li className={isSelected('')}><Link to=''>ПОЛЕЗНОЕ</Link></li>
              </ul>
            </li>
          </ul>
          <ul className='header__nav'>
            <li>ДЛЯ ПАРТНЁРОВ</li>
            <li>КАРЬЕРА</li>
            <li onClick={logout} style={{ cursor: "pointer" }}>{user ? 'ВЫЙТИ' : ''}</li>
            <li><Link to='/login' className={isSelected('/login')}>{user ? '' : 'ВОЙТИ'}</Link></li>
            <li>{user?.user.userName}</li>
            {user?.user.userName === 'admin' &&
              <li><Link to='/addproduct'>Добавить товар</Link></li>
            }
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
