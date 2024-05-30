
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TextImage } from "../../components/TextImage/TextAndImage";
import { FormLogin } from "../../components/FormLogin/FormLogin";






function Login() {


    const isAuth = useSelector(state => state.auth)



    if(isAuth.isAuth) return <Navigate to="/"/>

    return(

    <div className="conteyner inlain_login">
        <TextImage  font="h1" src="./images/auth1.png">Для оформления подписки на тариф, необходимо авторизоваться!</TextImage>
        <FormLogin/>        
    </div>

    )
}

export default Login