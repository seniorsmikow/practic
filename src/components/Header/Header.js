import React from 'react';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className={classes.header__main}>
            <nav className={classes.header__navs}>
                <Link to={'/'}>Главная</Link>  
                <Link to={'/OtherSlider'}>Слайдер 1</Link>  
                <Link to={'/NewSlider'}>Слайдер 2</Link>
                <Link to={'/FloatingGhost'}>Анимация 1</Link>
                <Link to={'/Lighthouse'}>Анимация 2</Link>
                <Link to={'/WolkingMan'}>Анимация 3</Link>
            </nav>
        </div>
    )
};

export default Header;