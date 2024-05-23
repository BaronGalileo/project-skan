import React from "react";
import { Img } from "./img";
import { Text } from "./Text";


function TextImage({children, classTxt="textAboveImage", classImg="imageBelowText", className="column txtImg", font, src, ...restProps}) {


    return(
        <>
            <div className={className}>
                <Text as={font} className={classTxt} {...restProps}>{children}</Text>
                <Img src={src} loading={"lazy"} className={classImg}/>
            </div>
        </>
    )
}

export {TextImage}