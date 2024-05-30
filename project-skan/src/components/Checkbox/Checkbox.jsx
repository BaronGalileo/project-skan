import React from "react";
import "./styles.css"
import { Text } from "../Text/Text";



function Checkbox({isChecked, onChange, children, ...restProps}) {
    return (
        <label className="checkbox-wrapper">
            <input
                {...restProps}
                type="checkbox"
                checked={isChecked}
                onChange={() => onChange((old) => !old)}
                className="checkbox-element"
            />
            <Text className="left">{children}</Text>
        </label>
    )
}
export {Checkbox}