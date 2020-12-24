import React from 'react';
import classes from './NewSlider.module.scss';

class NewSlider extends React.Component {

    constructor() {
        super();
        this.state = {
            images: [
                "https://kpopnews.ru/wp-content/uploads/alina-alekseeva.jpg",
                "https://playboyrussia.com/upload/medialibrary/63f/63ff562d8e238950460ec86429c2ccf0.jpg",
                "https://avatars.mds.yandex.net/get-zen_doc/56585/pub_5bdc1f02b9c26d00a9557351_5bdc25f49fb30d00aa65af36/scale_1200",
                "https://games-of-thrones.ru/sites/default/files/pictures/all/Alima/40.jpg",
                "https://ero-blog.ru/wp-content/uploads/2019/12/Alina-Alekseeva-01.jpg"
            ],
            currentImageIndex: 0,
            isDisabledPrev: true,
            isDisabledNext: false
        };
    }


    prevBtnHandler() {

        this.setState((prevState) => {

            if (this.state.currentImageIndex > 0) {
                return {
                    currentImageIndex: --prevState.currentImageIndex,
                    isDisabledNext: false
                };
            } else if (this.state.currentImageIndex === 0) {
                return {
                    isDisabledPrev: true
                };
            }
        });
    }

    nextBtnHandler() {

        const lengthArrayImages = this.state.images.length;

        this.setState((prevState) => {
           
            if (this.state.currentImageIndex < lengthArrayImages - 1) {
                return {
                    currentImageIndex: ++prevState.currentImageIndex,
                    isDisabledPrev: false
                };
            } else if (lengthArrayImages) {
                return {
                    isDisabledNext: true
                };
            }
        });
    }


    render() {
        return (
            <div className={classes.wrapper}>
                <div className={classes.newSlider__image}>
                    <img src={this.state.images[this.state.currentImageIndex]} alt="alina"/>
                </div>
                <div className={classes.newSlider__buttons}>
                    <button onClick={this.prevBtnHandler.bind(this)} disabled={this.state.isDisabledPrev}>PREV</button>
                    <button onClick={this.nextBtnHandler.bind(this)} disabled={this.state.isDisabledNext}>NEXT</button>
                </div>
            </div>
        )
    }
}

export default NewSlider;