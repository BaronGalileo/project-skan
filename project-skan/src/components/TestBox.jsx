import React, { Fragment } from "react";
import { Button } from "./Button";
import { useSelector } from "react-redux";
import axios from "axios";


function TestBox(){

    const auth = useSelector(state => state.auth)
    
    console.log(auth.token)


    const api = `https://gateway.scan-interfax.ru/api/v1/account/balance`
    
    if(auth.token){
        axios.get(api, { headers: {"Authorization" : `Bearer ${auth.token}`} })
        .then(res => {
            console.log(res.data);
        })}
    // if(today>t) return alert("Вот так вот")
    // switch (today) {
    //     case t:
    //       return alert(t)
    //       break;    
    //   }


    return(
    <Fragment>
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
export default TestBox