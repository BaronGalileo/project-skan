import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Text } from "../Text/Text";
import axios from "axios";



function Traffic() {

    const [info, setInfo] = useState(null)

    const puth = 'https://gateway.scan-interfax.ru/api/v1/account/info'

    const auth = useSelector(state => state.auth)

    useEffect(() => {
        axios.get(puth, auth.confermAut).then(res => {
            setInfo(res.data.eventFiltersInfo)
        })
    }, [auth])


    if(info){
        return(
            <div className="loader">
                <Text className="trafic">Использовано компаний : <span className="quantity"> {info.usedCompanyCount}</span></Text>
                <Text className="trafic">Лимит по компаниям : <span className="quantity grin">{info.companyLimit}</span></Text>
        </div>
        )
    }
    

    return(
        <div className="spiner">
            <span className="loader-spiner"></span>
        </div>
    )
}

export {Traffic}