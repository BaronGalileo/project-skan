import React from "react";

import classNames from "classnames";
import { TextImage } from "../TextImage/TextAndImage";

function SliderComponent({children, src, classImg="sliderImg", classTxt="sliderTxt"}) {

    const classesImg = classNames(
        '',
        classImg,
    ) 

    const classesTxt = classNames(
        '',
        classTxt,
    )
    
    return(
        <>
            <TextImage classImg={classesImg} classTxt={classesTxt} isImage="true" className="sliderComponent" src={src}>{children}</TextImage>

        </>
    )
}

export {SliderComponent}