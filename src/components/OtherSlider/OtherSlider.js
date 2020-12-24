import React, { useState } from 'react';
import classes from './OtherSlider.module.scss';
import ImgOne from '../../img/IMG_2391.jpg';
import ImgTwo from '../../img/IMG_3594-4.jpg';
import ImgThree from '../../img/IMG_4354.jpg';
import ImgFour from '../../img/IMG_4754.jpg';
import ImgFive from '../../img/IMG_5785.jpg';


const OtherSlider = () => {

    let imgArray = [
        ImgOne, ImgTwo, ImgThree, ImgFour, ImgFive
    ];

    const [posX, setPosX] = useState(0);
    const [isFinishNext, setIsFinishNext] = useState(false);
    const [isFinishPrev, setIsFinishPrev] = useState(false);

    const toPrev = () => {
        if(posX === 0) {
            setIsFinishPrev(true);
            setIsFinishNext(false);
        } else {
            setPosX(posX + 100);
        }
    };

    const toNext = () => {
        if(posX === -100 * (imgArray.length -1)) {
            setIsFinishNext(true);
        } else {
            setPosX(posX - 100);
            setIsFinishPrev(false);
        }
    };

    return (
        <div className={classes.main}>
            {
                imgArray.map((elem, index) => {
                    return <div key={index} className={classes.slider__img_wrapper} style={{transform: `translateX(${posX}%)`}}>
                        <img src={elem} alt="slider-img"/>
                    </div>
                })
            }
            <button className={classes.prev__button} onClick={toPrev} disabled={isFinishPrev}>PREV</button>
            <button className={classes.next__button} onClick={toNext} disabled={isFinishNext}>
                NEXT
            </button>
        </div>
    )
};

export default OtherSlider;