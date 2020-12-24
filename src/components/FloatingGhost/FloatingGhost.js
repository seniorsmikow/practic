import React from 'react';
import classes from './FloatingGhost.module.scss';

const FloatingGhost = () => {
    return (
        <div className={classes.main}>
            <div className={classes.ghost__body}>
                <div className={classes.ghost__hands}>
                    <span></span>
                    <span></span>
                </div>
                <div className={classes.ghost__face}>
                    <div className={classes.ghost__eyes}>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={classes.ghost_mouth}></div>
                </div>
                <div className={classes.ghost_feet}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={classes.text}>Hover over me!</div>
        </div>
    )
};

export default FloatingGhost;