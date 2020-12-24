import React from 'react';
import classes from './Lighthouse.module.scss';

const Lighthouse = () => {
    return (
        <div className={classes.lighthouse__wrapper}>
            <div className={classes.first__light}></div>
            <div className={classes.second__light}></div>
        </div>
    )
};

export default Lighthouse;