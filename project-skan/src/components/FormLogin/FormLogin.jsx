import React, {useEffect, useState} from "react";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../store/authSlice"
import { Img } from "../Img/img";
import { Input } from "../Input/Input";



function FormLogin (){
    const [user, setUser] = useState({
        login: '',
        password: ''
    })


    useEffect(() => {
        const btn = document.querySelector('.btn_login');
        user.login && user.password ? btn.disabled=false: btn.disabled=true

    }, [user])
    

    const dispatch = useDispatch();

    const path = "https://gateway.scan-interfax.ru/api/v1/account/login"
    
    function handleImput(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(path, {
            login: user.login,
            password: user.password
          })
        .then(res => {
            const account = {login: user.login,...res.data}
            dispatch(setAuth(account))
        
        })
        .catch(err => alert(err))
    }
    

    return (
        <>
        <Img className="logo lock" src="./images/img_trophy.png"/>
        <div className="mobile_form">
        <div className="conteyner_form">
            <form onSubmit={handleSubmit}>
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
                <Input name="login" value={user} onChange={setUser}>Логин или номер телефона:</Input>
                <Input name="password" value={user} onChange={setUser}>Пароль:</Input>
                <Button className="btn_login"disabled>Войти</Button>
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