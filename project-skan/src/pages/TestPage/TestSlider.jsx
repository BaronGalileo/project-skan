import React, {useEffect, useState} from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from "../../components/Button/Button";
import { SliderComponent } from "../../components/Slider/SliderComponent";







const responsive = {
    0: { items: 1}, 550: { items: 1 }, 1050: { items: 3 }, 1500: { items: 3}}


    
    const items = [
        <SliderComponent src="./images/auth1.png">Какой-то тект 1!</SliderComponent>,
        <SliderComponent src="./images/auth1.png">Какой-то тект 2!</SliderComponent>,
        <SliderComponent src="./images/auth1.png">Какой-то тект 3!</SliderComponent>,
        <SliderComponent src="./images/auth1.png">Какой-то тект 4!</SliderComponent>,
        <SliderComponent src="./images/auth1.png">Какой-то тект 5!</SliderComponent>,
        <SliderComponent src="./images/auth1.png">Какой-то тект 6!</SliderComponent>,
        <SliderComponent src="./images/auth1.png">Какой-то тект 7!</SliderComponent>,
        <SliderComponent src="./images/auth1.png">Какой-то тект 8!</SliderComponent>,
        <SliderComponent src="./images/auth1.png">Какой-то тект 9!</SliderComponent>,
        <SliderComponent src="./images/auth1.png">Какой-то тект 10!</SliderComponent>,
        <SliderComponent src="./images/auth1.png">Какой-то тект 11!</SliderComponent>,
        <SliderComponent src="./images/auth1.png">Какой-то тект 12!</SliderComponent>,
        <SliderComponent src="./images/auth1.png">Какой-то тект 13!</SliderComponent>,
        <SliderComponent src="./images/auth1.png">Какой-то тект 14!</SliderComponent>,
        <SliderComponent src="./images/auth1.png">Какой-то тект 15!</SliderComponent>,
        // <div className="item" data-value="1">1</div>,
        // <div className="item" data-value="2">2</div>,
        // <div className="item" data-value="3">3</div>,
        // <div className="item" data-value="4">4</div>,
        // <div className="item" data-value="5">5</div>,
    ];
    
    // const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
    //     return items.map((item, i) => (
    //         <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
    //             {item}
    //         </div>
    //     ));
    // };
    
    const Carousel = () => {

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
        // const [mainIndex, setMainIndex] = useState(0);

        // const [mainAnimation, setMainAnimation] = useState(false);
        // const [thumbIndex, setThumbIndex] = useState(0);
        // const [thumbAnimation, setThumbAnimation] = useState(false);
        // const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));
        // const [disabledNext, setDisabledNext] = useState(false);
        // const [disabledPrev, setDisabledPrev] = useState(true);

        // useEffect(() => {

        //     }, [disabledNext, disabledPrev])

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
            let element = document.querySelector('.alice-carousel__stage')
            let notActivElements = document.querySelectorAll(".alice-carousel__stage-item")
            let activElement = document.querySelectorAll('.__active')
            let child = element.children
            let coord = element.style.transform
            let coordElement = Number(coord.split('(')[1].split(',')[0].replace('px',''))
            let step = Number(child[0].style.width.replace('px', ''))
            let possibleActions = notActivElements.length - activElement.length
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




  

            
            // let nextElement = element.nextSibling

            // element.classList.remove("__active __target")
            // nextElement.classList.add("__active __target")

            // console.log(e.target.nextSibling)
            // var elemt = document.querySelector('.alice-carousel__stage')
            // let car = document.querySelector('.alice-carousel__stage-item')
            // let activ = document.querySelectorAll(".alice-carousel__stage-item")
            // console.log("alice-carousel__stage-item", activ)
            // let carStyle = Number(car.style.width.replace("px", ""))
            // console.log("car.style", carStyle)

            // // console.log("elemt.style", coordStyle)
            // let coordCarosel = elemt.style.transform
            // const matrixValues = coordCarosel.split("(");
            // const matrixValues2 = matrixValues[1].split(",")
            // const x = Number(matrixValues2[0].replace("px", ""))
            // // console.log(coordCarosel, matrixValues2[0].replace("px", ""), x)
            // const resultString = `translate3d(${x-carStyle}px, 0px, 0px)`;
            // const q = elemt.style.setProperty("transition", 'transform 400ms ease 0ms');
            // const c = elemt.style.setProperty("transform", "translate(10px, 0)");
            // console.log("setProperty", c)
            // return (q,c)




            // if (!thumbAnimation && thumbIndex > 0) {
            //     setThumbAnimation(true);
            //     setThumbIndex(thumbIndex - 1);

            // }

        };
    
        // const syncMainBeforeChange = (e) => {
        //     setMainAnimation(true);
        // };
    
        // const syncMainAfterChange = (e) => {
        //     setMainAnimation(false);
    
        //     if (e.type === 'action') {
        //         setThumbIndex(e.item);
        //         setThumbAnimation(false);
        //     } else {
        //         setMainIndex(thumbIndex);
        //     }
        // };
    
        // const syncThumbs = (e) => {
        //     setThumbIndex(e.item);
        //     setThumbAnimation(false);
    
        //     if (!mainAnimation) {
        //         setMainIndex(e.item);
        //     }
        // };
        // const onSlideChange = (e) => {
        //     console.log(`onSlideChange => Item's position before a change: ${e.item}. Event:`, e);
        // };

        // const onResized = (e) => {
        //     console.log(`onResized => Item's position before a change: ${e.item}. onResizedEvent:`, e);
        // };


    
        return [
        //    <AliceCarousel
        //         activeIndex={mainIndex}
        //         animationType="fadeout"
        //         animationDuration={800}
        //         disableDotsControls
        //         disableButtonsControls
        //         items={items}
        //         mouseTracking={!thumbAnimation}
        //         onSlideChange={syncMainBeforeChange}
        //         onSlideChanged={syncMainAfterChange}
        //         touchTracking={!thumbAnimation}
        //    />,
           <div className="testbox">
            <Button className="btn-prev"  onClick={slidePrev}>⇚</Button>
               <AliceCarousel
                    activeIndex={indexTarget}
                    // disableDotsControls
                    disableButtonsControls
                    onSlideChanged={onSlideChanged}
                    responsive={responsive}
                    mouseTracking items={items}
               />
               <Button className="btn-next"  onClick={slideNext}>⇛</Button>
           </div>
        ]
    };

    export {Carousel}