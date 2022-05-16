import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../images/home.svg';
import '../Header/Header.css';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='header__image'>
          <img src={home} alt='' />
        </div>
      </Link>
    </div>
  );
};

export default Header;
