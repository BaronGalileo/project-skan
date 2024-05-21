import { useSelector, useDispatch } from "react-redux"
import { removeAuth } from "./authSlice";


export const Examination = () => {

    const expire = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const expireTime = expire.expire ? new Date(expire.expire).toISOString() : null;

    const timeNew = new Date().toISOString()

    if(expireTime < timeNew) return dispatch(removeAuth())

}