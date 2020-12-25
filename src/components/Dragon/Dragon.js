import React from 'react';
import classes from './Dragon.module.scss';
import DragonImg from '../../img/dragon4.png';


const Dragon = () => {
    return (
        <div className={classes.dragon__wrapper}>
            <img src={DragonImg} alt="dragon"/>
        </div>
    )
};

export default Dragon;