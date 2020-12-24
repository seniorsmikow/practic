import React from 'react';
import classes from './Slider.module.scss';


const Slider = () => {

    const prevBtn = () => {
        alert("Prev");
    };

    const nextBtn = () => {
        alert("Next");
    };


    return (
        // slider__wrapper-оболочка
        //slider__container-"окно", в котором перемещаются элементы,
        <div className={classes.slider__wrapper}>
            <div className={classes.slider__container}>  
                <div className={classes.slider__track}>
                    <div className={classes.slider__item}></div>
                    <div className={classes.slider__item}></div>
                    <div className={classes.slider__item}></div>
                    <div className={classes.slider__item}></div>
                    <div className={classes.slider__item}></div>
                    <div className={classes.slider__item}></div>
                    <div className={classes.slider__item}></div>
                </div>
            </div>
            <div className={classes.slider__buttons}>
                <button onClick={ prevBtn }>PREV</button>
                <button onClick={ nextBtn }>NEXT</button>
            </div>
        </div>
    )
};

export default Slider;