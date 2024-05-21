import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import { Img } from "./img";
import { Text } from "./Text";
import { Button } from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { removeAuth } from "../store/authSlice"
import { Traffic } from "./Traffic";
import { Account } from "./Account";



function Layout() {

    const isAuth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const disconect = () => {
        dispatch(removeAuth())
    }


    return (
        <>
        <header>

            <Img className="logo" src="./images/logo.png" alt="logo image"/>
            <div className="box">
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/№" >Тарифы</NavLink>
                <NavLink to="#" >FAQ</NavLink>
            </div>
            <div className="box">
                {isAuth.isAuth &&
                <Traffic/>}
                <Account/>
                {/* <div className="loader">
                    <div>Использовано компаний</div>
                    <div>Лимит по компаниям</div>
                </div> */}

                        
                {/* <div >
                    {isAuth.isAuth ? 
                    <div className="login">
                        <Img className="foto-acc" src="./images/keyaccount.png" alt="foto-acc image"/>
                        <Button disabled>Войти</Button>
                        <Button href="/" onClick={disconect} >Выйти</Button>
                    </div> : 
                    <div className="login">
                        <Button href="#">Зарегистрироваться</Button>
                        <Button href="http://localhost:3000/login">Войти</Button>
                    </div>
                }
                </div> */}
                
                
            </div>
     
        </header>
        <Outlet />
        <footer>
            <div className="conteyner">
                <Img className="logo" src="./images/logo.png" alt="logo image"/>
                <Text>Версия 2.0 2024г.</Text>
            </div>
            </footer>
      </>
    )
}

export default Layout