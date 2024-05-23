import React from "react";
import { Img } from "./img";
import { Button } from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { removeAuth } from "../store/authSlice"
import { Text } from "./Text";


function Account() {

    const isAuth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const disconect = () => {
        dispatch(removeAuth())
    }

    console.log("isAuth.isAuth.login",isAuth)
    return(
        <div >
        {isAuth.isAuth ? 
            <div className="login">
                <div className="acc">
                    <Text>{isAuth.username}</Text>
                    <Button href="/" onClick={disconect} >Выйти</Button>
                </div>
                <Img className="foto-acc" src="./images/keyaccount.png" alt="foto-acc image"/>
            </div> : 
            <div className="login">
                <Button href="#">Зарегистрироваться</Button>
                <Button href="http://localhost:3000/login">Войти</Button>
            </div>
        }
        </div>
    )
}

export {Account}