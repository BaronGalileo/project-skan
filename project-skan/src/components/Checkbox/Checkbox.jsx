import React from "react";
import "./styles.css"
import { Text } from "../Text/Text";
import {  useFormContext } from "react-hook-form";




function Checkbox({name, onChange,   children, ...restProps}) {

    const {
        register,
    } = useFormContext()




    return (
        <label className="checkbox-wrapper">
            <input
                {...restProps}
                {...register(name, {
                    onChange: onChange
                })}
                type="checkbox"
                className="checkbox-element"
            />
            <Text className="left">{children}</Text>
        </label>
    )
}
export {Checkbox}