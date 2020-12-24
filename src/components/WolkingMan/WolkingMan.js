import React from 'react';
import classes from './WolkingMan.module.scss';


const WolkingMan = () => {
    return (
        <div className={classes.main}>
            <div className={classes.man__wrapper}>
                <div className={classes.man__head}></div>
                <div className={classes.man__body}></div>
                <div className={classes.man__foot_right}></div>
                <div className={classes.man__foot_left}></div>
                <div className={classes.man__hand_left}></div>
                <div className={classes.man__hand_right}></div>
            </div>
            <div className={classes.road}></div>
        </div>
    )
};

export default WolkingMan;