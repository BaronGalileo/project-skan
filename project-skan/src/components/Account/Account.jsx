import React from "react";
import { Img } from "../Img/img";
import { Button } from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { removeAuth } from "../../store/authSlice"
import { removeResult } from "../../store/resultDataSlice"
import { Text } from "../Text/Text";
import { removeHistograms } from "../../store/histogramsSlice";


function Account() {

    const isAuth = useSelector(state => state.auth);

    const dispatch = useDispatch();


    const disconect = () => {
        dispatch(removeResult())
        dispatch(removeAuth())
        dispatch(removeHistograms())
    }

    return(
        <div className="right_block">
        {isAuth.isAuth ? 
            <div className="login">
                <Img className="foto-acc" src="./images/keyaccount.png" alt="foto-acc image"/>
                <div className="acc">
                    <Text>{isAuth.username}</Text>
                    <Button href="/" onClick={disconect} >Выйти</Button>
                </div>
            </div> : 
            <div className="login">
                <Button href="#">Зарегистрироваться</Button>
                <hr/>
                <Button href="http://localhost:3000/login">Войти</Button>
            </div>
        }
        </div>
    )
}

export {Account}