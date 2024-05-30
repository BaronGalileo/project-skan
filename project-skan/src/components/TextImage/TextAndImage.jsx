import React from "react";
import { Img } from "../Img/img";
import { Text } from "../Text/Text";


function TextImage({children, classTxt="textAboveImage", classImg="imageBelowText", className="column txtImg", font, src, isImage=false, ...restProps}) {

    if(isImage){
        return(
            <>
            <div className={className}>
                <Img src={src} loading={"lazy"} className={classImg}/>
                <Text as={font} className={classTxt} {...restProps}>{children}</Text>
            </div>
        </>
        )
    }


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