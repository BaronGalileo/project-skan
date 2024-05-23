import { useState } from "react";
import { Button } from "../components/Button";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../store/authSlice"
import { Text } from "../components/Text";
import { Img } from "../components/img";
import { TextImage } from "../components/TextAndImage";






function Login() {
    const [user, setUser] = useState({
        login: '',
        password: ''
    })


    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.auth)

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
        .catch(err => console.log(err))
    }





    if(isAuth.isAuth) return <Navigate to="/"/>

    return(

    <div className="conteyner">
        <TextImage font="h1" src="./images/auth1.png">Для оформления подписки на тариф, необходимо авторизоваться!</TextImage>
        
        <div>
        <form onSubmit={handleSubmit} >
            <Text as="h2" className="bold">Авторизация</Text>
            <input  name="login" onChange={handleImput} placeholder="login"/>
            <input  name="password" onChange={handleImput} placeholder="password"/>
            <Button>Войти</Button>
        </form>
        </div>
    </div>

    )
}

export default Login