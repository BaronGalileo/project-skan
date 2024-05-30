import React from "react";
import classNames from "classnames";

function Img({ className, src = "defaultNoData.png", alt = "testImg", ...restProps }){

    const classes = classNames(
        "img",
        className,
    )

    return <img className={classes}
                src={src} 
                alt={alt} 
                {...restProps} 
                loading={"lazy"}/>
};

export {Img}