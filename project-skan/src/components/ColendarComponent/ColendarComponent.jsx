import React, {useState, useEffect, useRef} from "react";
import { Calendar } from  'react-date-range'
import format from "date-fns/format";
import { Input } from "../Input/Input";

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './styles.css'


const ColendarComponent = ({children, name, dateToSend, ...restProps}) => {

    const[calendar, setCalendar] = useState('')

    const[open, setOpen] = useState(false)

    const refCalendar = useRef(null)

    const refInput = useRef(null)

    
    useEffect(() => {
        console.log("calendar", calendar)
        setCalendar(format(new Date(), 'd /MMM/yyyy'))
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    const hideOnEscape = (e) => {
        if(e.key === "Escape") {
            setOpen(false)
        }
    }
    //сварачиваем календарь
    const hideOnClickOutside = (e) => {

        if(refInput.current !== e.target && refCalendar.current && !refCalendar.current.contains(e.target)) {
            setOpen(false)
        }       
    }

    const handleSelect = (date) => {
        //передаем дату наверх
        dateToSend(format(date, 'yyyy-MM-d'))
        //дата для внутреннего пользования
        setCalendar(format(date, 'd /MMM/yyyy'))
    }

    return(
        <div className="calendar-wrapper">
            <Input ref={refInput} 
                {...restProps}
                value={ calendar } 
                onClick={ () => setOpen(open => !open)} 
                name={name}  
                onChange={handleSelect}>{children}</Input>
 
            
            <div ref={refCalendar}>
            {open &&
                <Calendar
                date={format(calendar, 'd /MMM/yyyy')}
                onChange={handleSelect}
                className="calendar-element"
            />}
            </div>

        </div>
    )

}

export {ColendarComponent}