import React from 'react';
import cl from './Header.module.css';

const Header = () => {
    return (
        <div className={cl.header}>
            <p className={cl.header__logo}>todomy</p>
            <a className={cl.header__link} href="#">Sign in</a>
        </div>
    );
};

export default Header;

