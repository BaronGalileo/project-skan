import React, {useEffect, useState} from "react";
import AliceCarousel from 'react-alice-carousel';
import { Button } from "../Button/Button";
import { Img } from "../Img/img";
import { Text } from "../Text/Text";

import "./styles.css"







const responsive = {
    0: { items: 1}, 600: { items: 2 }, 1050: { items: 3 }, 1500: { items: 5}}

   
    
function SliderCom ({children, frame, responsiveProps, ...restProps}) {

    const [indexTarget, setIndexTarget] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

    }, []);

    useEffect(() => {
        if(indexTarget===0){
            const btnPrev = document.querySelector('.btn-prev');
            btnPrev.disabled=true
        }

    }, [indexTarget])

     


        
    const handleResize = (e) => {
        setIndexTarget(0)
    }



    const onSlideChanged = (e) => {
        const btnPrev = document.querySelector('.btn-prev');
        const btnNext = document.querySelector('.btn-next');

        setIndexTarget(e.item)
        if(!e.isNextSlideDisabled){
            btnNext.disabled=false
        }
        else btnNext.disabled=true   
        if(!e.isPrevSlideDisabled) {
            btnPrev.disabled=false

        } else  btnPrev.disabled=true   
    };

    
    const slideNext = (e) => {
        let dotsItem = document.querySelector('.alice-carousel__dots-item')
        let activElement =  dotsItem ? document.querySelectorAll('.__active').length - 1 : document.querySelectorAll('.__active').length 
        
        
        let element = document.querySelector('.alice-carousel__stage')
        let notActivElements = document.querySelectorAll(".alice-carousel__stage-item").length
        let child = element.children
        let coord = element.style.transform
        let coordElement = Number(coord.split('(')[1].split(',')[0].replace('px',''))
        let step = Number(child[0].style.width.replace('px', ''))
        let possibleActions = notActivElements - activElement
        if(indexTarget < possibleActions ){
            setIndexTarget(indexTarget+1);
            let resultX = coordElement-step + "px";
            element.style.setProperty("transition", 'transform 400ms ease 0ms');  
            element.style.setProperty("transform", "translate3d(" +`${resultX}` +", 0px, 0px)");
            if(indexTarget === possibleActions-1){
                e.target.disabled=true
            }
        }

    };
    
    const slidePrev = (e) => {
        console.log("slidePrev", e)
        let element = document.querySelector('.alice-carousel__stage')
        let child = element.children
        let coord = element.style.transform
        let coordElement = Number(coord.split('(')[1].split(',')[0].replace('px',''))
        let step = Number(child[0].style.width.replace('px', ''))
        if(indexTarget > 0 ){
            setIndexTarget(indexTarget-1);
            let resultX = coordElement+step + "px";
            element.style.setProperty("transition", 'transform 400ms ease 0ms');  
            element.style.setProperty("transform", "translate3d(" +`${resultX}` +", 0px, 0px)");
        } else e.target.disabled=true

    };
    


    
    return [
        
        <div className="slider-box">
        <span><Button  clean id="arrowL" className="btn-prev"  onClick={slidePrev}>&lt;</Button></span>
        {frame &&
        <div className="frame-wrapper">
            <div className="frame-element">
                {frame.map((val) => {
                    return(<Text className="white bold">{val}</Text>)
                    })}
            </div>
            <AliceCarousel
                activeIndex={indexTarget}
                disableDotsControls
                disableButtonsControls
                onSlideChanged={onSlideChanged}
                responsive={responsiveProps? responsiveProps :responsive}
                mouseTracking items={children}
            />
        </div>}
            {!frame &&
            <AliceCarousel
                activeIndex={indexTarget}
                disableButtonsControls
                onSlideChanged={onSlideChanged}
                responsive={responsiveProps? responsiveProps :responsive}
                mouseTracking items={children}
            />}
            <Button clean id="arrowL" className="btn-next"  onClick={slideNext}>&gt;</Button>
        </div>
        ]
    };

    export {SliderCom}