import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


// const handleDragStart = (e) => e.preventDefault();



const Slider = ({items, ...reactProps}) => 
<AliceCarousel 
    {...reactProps}
    mouseTracking items={items}
    responsive={{0: { items: 1}, 550: { items: 1 }, 1050: { items: 3 }, 1500: { items: 5}}} />;

export {Slider}