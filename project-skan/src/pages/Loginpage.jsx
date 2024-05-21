import { useState } from "react";
import { Button } from "../components/Button";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../store/authSlice"






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

            dispatch(setAuth(res.data))
        
        })
        .catch(err => console.log(err))
    }





    if(isAuth.isAuth) return <Navigate to="/"/>

    return(

    <div>
        <form onSubmit={handleSubmit} >
            <input  name="login" onChange={handleImput} placeholder="login"/>
            <input  name="password" onChange={handleImput} placeholder="password"/>
            <Button>Test</Button>
        </form>
    </div>

    )
}

export default Login