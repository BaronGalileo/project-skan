import React, { Fragment } from "react";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { TextImage } from "../TextImage/TextAndImage";


function TestBox(){

    const auth = useSelector(state => state.auth)
    

    const api = `https://gateway.scan-interfax.ru/api/v1/account/balance`
    

    

    

    return(
    <Fragment>
        <TextImage font-size="2em" font="h1" src="./images/auth1.png">Привет</TextImage>
        <h2><span>1. Text and onClick function</span></h2>
        <Button onClick={() => {console.log("!!!!")}}>Button text</Button>

        <h2><span>2. Disabled button</span></h2>
        <Button onClick={() => {console.log("!!!!")}} disabled />

        <h2><span>3. Activ button</span></h2>
        <Button active />

        <h2><span>3. Activ button</span></h2>
        <Button active className="btn2" name="GH" onMouse={()=> {console.log("dsdsd")}}/>

        <h2><span>5. button link</span></h2>
        <Button href="http://localhost:3000/id">Link</Button>
        <Button href="http://localhost:3000/id" disabled>Link</Button>
    </Fragment>
    )
}
export  {TestBox}