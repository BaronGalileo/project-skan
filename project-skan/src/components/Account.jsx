import React from "react";
import { Img } from "./img";
import { Button } from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { removeAuth } from "../store/authSlice"


function Account() {

    const isAuth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const disconect = () => {
        dispatch(removeAuth())
    }

    return(
        <div >
        {isAuth.isAuth ? 
            <div className="login">
                <Img className="foto-acc" src="./images/keyaccount.png" alt="foto-acc image"/>
                <Button href="/" onClick={disconect} >Выйти</Button>
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