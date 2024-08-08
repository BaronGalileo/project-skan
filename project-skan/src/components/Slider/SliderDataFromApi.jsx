import React from "react";
import "./styles.css";
import { Text } from "../Text/Text";
import format from "date-fns/format";


const SliderDataFromApi = ({dataFromApi, id, ...restProps}) => {

    const date = format(dataFromApi.date, 'dd.MM.yyyy')

    const value = dataFromApi.value

    const riskFactors = dataFromApi.riskFact


    return (
        <div id={id} className="frame-element not-color">
            <Text className="t-blok">{date}</Text>
            <Text className="t-blok">{value}</Text>
            <Text className="t-blok">{riskFactors}</Text>
        </div>
    )
}

export {SliderDataFromApi}