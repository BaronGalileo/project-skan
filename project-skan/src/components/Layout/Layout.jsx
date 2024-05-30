import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import { Img } from "../Img/img";
import { Text } from "../Text/Text";
import { useSelector, useDispatch } from "react-redux";
import { Traffic } from "../Traffic/Traffic";
import { Account } from "../Account/Account";




function Layout() {

    const isAuth = useSelector(state => state.auth);

    return (
        <div className="page">
            <header>

                <Img className="logo" src="./images/logo.png" alt="logo image"/>
                <div className="box-link">
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="" >Тарифы</NavLink>
                    <NavLink to="" >FAQ</NavLink>
                </div>
                <div className="box">
                    {isAuth.isAuth &&
                    <Traffic/>}
                    <Account/>            
                </div>
     
            </header>
            <main>
                <Outlet/>            
            </main>
            <footer>
                <div className="conteyner futer">
                    <Img className="logo" src="./images/logo-futer-transformed.png" alt="logo image"/>
                    <Text className="white">Версия 2.0 2024г.</Text>
                </div>
            </footer>
      </div>
    )
}

export default Layout