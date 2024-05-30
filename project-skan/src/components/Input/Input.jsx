import React from "react";
import './styles.css'
import { Text } from "../Text/Text";


function Input({name, onChange, value, children, ...restProps}) {

    const handleChange = (e) => {
        onChange({...value, [e.target.name]: e.target.value})
    }

    return (
        <label className="input-wrapper">
            <Text className="left">{children}</Text>
            <input
            {...restProps}
            name={name}
            className="input-element"
            onChange={handleChange}
            />
        </label>
    )
}

export {Input}