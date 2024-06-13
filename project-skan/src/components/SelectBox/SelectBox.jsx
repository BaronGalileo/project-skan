import React from "react";
import "./styles.css"
import { Text } from "../Text/Text";
import {  useFormContext } from "react-hook-form"


function SelectBox({options, name, children, placeholder, defaultSelect, ...restProps}) {

  const {
    register
} = useFormContext()



  return(


    <label className="select-wrapper">
      <Text className="left">{children}</Text>
      <select
        {...register(name)}
        className="select-element" 
        {...restProps}>
        <option value={defaultSelect}>{placeholder}</option>
        {options.map(index => {
        return(<option key={index.value} value={index.value}>{index.text}</option>)
        })}
      </select>
    </label>    
  )
}

export {SelectBox}