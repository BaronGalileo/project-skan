import React from "react";
import "./styles.css"
import { Text } from "../Text/Text";


function SelectBox({options, onChange, children, placeholder, ...restProps}) {


    const handleChange = (e) => {
        onChange({value: e.target.value});
      }

    return(


          <label className="select-wrapper">
            <Text className="left">{children}</Text>
            <select 
            className="select-element" 
            onChange={handleChange}
            {...restProps}>
                <option value="" disabled selected hidden>{placeholder}</option>
                {options.map(index => {
                    return(<option key={index.value} value={index.value}>{index.text}</option>)
                })}
            </select>
          </label>
        )
}

export {SelectBox}