import React from 'react';
import classes from './Menu.module.scss';


const Menu = props => {
    return (
        <div className={classes.menu__wrapper} style={props}>
            Menu block
        </div>
    )
};

export default Menu;