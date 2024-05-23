import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDataFromApi } from "../helpers/promeseFromApi";
import { Text } from "./Text";


function Traffic() {

    const [info, setInfo] = useState(null)

    const puth = 'https://gateway.scan-interfax.ru/api/v1/account/info'

    const auth = useSelector(state => state.auth)

    useEffect(() => {
        getDataFromApi(puth, auth).then(res => {
            setInfo(res.data.eventFiltersInfo)
        })
    }, [auth])


    if(info){
        return(
            <div className="loader">
                <Text className="trafic">Использовано компаний : <Text className="quantity">{info.usedCompanyCount}</Text></Text>
                <Text className="trafic">Лимит по компаниям : <Text className="quantity grin">{info.companyLimit}</Text></Text>
        </div>
        )
    }
    

    return(
        <div>
            <h2>Ничего нету</h2>
            <p>крутиться колесико</p>
        </div>
    )
}

export {Traffic}