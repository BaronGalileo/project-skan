import React from "react";
import './styles.css'
import { Text } from "../Text/Text";


function Input({onlyValue, name, onChange, values, children, ...restProps}) {

    const handleChange = (e) => {
        onlyValue ? onChange(e.target.value) : onChange({...values, [e.target.name]: e.target.value})
        // console.log(e.target.value)
        // onChange({...values, [e.target.name]: e.target.value})
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