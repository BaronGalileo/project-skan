import React from "react";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/authSlice"
import { Img } from "../Img/img";
import { Input } from "../Input/Input";
import {  useFormContext } from "react-hook-form";



function FormLogin (){



    const {
        handleSubmit,
        reset,
        formState: {isValid}
    } = useFormContext()


    

    const dispatch = useDispatch();

    const path = "https://gateway.scan-interfax.ru/api/v1/account/login"
    


    const onSubmit = (data) => {
        axios.post(path, data)
        .then(res => {
            const account = {login: data.login,...res.data}
            dispatch(setAuth(account))
        
        })
        .catch(err => alert(err))
        reset()
    }
    

    return (
        <>
        <Img className="logo lock" src="./images/img_trophy.png"/>
        <div className="mobile_form">
        <div className="conteyner_form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="heder_form">
                    <div>
                    <Text as="a" className="login_txt bold" href="/login">Войти</Text>
                    <hr className="separator"/> 
                    </div>
                    <div>
                    <Text as="a" className="register_txt_not_activ bold" href="#">Зарегистрироваться</Text>
                    <hr className="separator not_activ"/>
                    </div>
                </div>
                <Input name="login" message="Обязательно заполнить!">Логин или номер телефона:</Input>
                <Input name="password" message="Обязательно заполнить!">Пароль:</Input>
                <Button className="btn_login" disabled={!isValid}>Войти</Button>
                <Text as="a" className="href-line" href="#">Восстановить пароль</Text>
                <Text className="left" > Войти через:</Text>
            </form>
            <div>
                    <Button className='cursor-pointer'>Google</Button>
                    <Button className='cursor-pointer'>Facebooc</Button>
                    <Button className='cursor-pointer'>Яндекс</Button>
            </div>
        </div>
        </div>
        </>
    )

}
export {FormLogin}