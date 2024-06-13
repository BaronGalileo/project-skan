import React from "react";
import "./styles.css";
import { Text } from "../Text/Text";


const SliderDataFromApi = ({dataFromApi, id, ...restProps}) => {

    const name = dataFromApi.name

    const age = dataFromApi.age

    const sex = dataFromApi.sex


    return (
        <div id={id} className="frame-element not-color">
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{sex}</Text>
        </div>
    )
}

export {SliderDataFromApi}