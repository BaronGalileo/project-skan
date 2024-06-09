import React, {useState, useEffect, useRef} from "react";
import { Calendar } from  'react-date-range'
import { Text } from "../Text/Text";
import format from "date-fns/format";
import {  useFormContext } from "react-hook-form"

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './styles.css'


const ColendarComponent = () => {


    
    const {
        register,
        setValue,
        formState: {errors},
    }  = useFormContext()

    const[calendarStart, setCalendarStart] = useState('')

    const[calendarEnd, setCalendarEnd] = useState('')

    const[openStart, setOpenStart] = useState(false)

    const[openEnd, setOpenEnd] = useState(false)

    const refStartCalendar = useRef(null)

    const refEndCalendar = useRef(null)

    const errorStart =errors.issueDateInterval?.startDate?.message;

    const errorEnd = errors.issueDateInterval?.endDate?.message;

    const newTime = format(new Date(), 'yyyy-MM-dd')



        
    useEffect(() => {
        setCalendarStart(format(new Date(), 'd/MMM/yyyy'))
        setCalendarEnd(format(new Date(), 'd/MMM/yyyy'))
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])
    
    const hideOnEscape = (e) => {
        if(e.key === "Escape") {
            setOpenEnd(false)
            setOpenStart(false)
        }
    }
    
    const hideOnClickOutside = (e) => {
        if("issueDateInterval.startDate" !== e.target.name && refStartCalendar.current && !refStartCalendar.current.contains(e.target)) {
            setOpenStart(false)
        }
        else if ('issueDateInterval.endDate'  !== e.target.name && refEndCalendar.current && !refStartCalendar.current.contains(e.target)) {
            setOpenEnd(false)
        }
        }

    const validateStart = (val, formValues) => {
        if(val > newTime){return("Мы не сможем заглянуть в будущее. Начало поиска - только со вчерашнего дня.")}
        if(formValues.issueDateInterval.endDate === '' && val < newTime)
            return true
        else if (formValues.issueDateInterval.endDate > val) {
            return true
        }
  
    }

    const myValidateEnd = (val, formValues) => {
        if(val > newTime){return("Мы не сможем заглянуть в будущее. Крайний срок сегодняшняя дата.")}
        if(formValues.issueDateInterval.startDate === '' && val <= newTime)
            return true
        else if(formValues.issueDateInterval.startDate < val)
            return true
         

    }

    const handleSelectStart = (date) => {     
        //для отправки значения в форме
        setValue(`issueDateInterval.startDate`, format(date, 'yyyy-MM-dd'), { shouldValidate: true })
        //дата для внутреннего пользования
        setCalendarStart(date)
        setOpenStart(false)
    }

    const handleSelectEnd = (date) => {
        setValue(`issueDateInterval.endDate`, format(date, 'yyyy-MM-dd'), { shouldValidate: true })
        setCalendarEnd(date)
        setOpenEnd(false)
    }



        return(
                <div className="calendar-wrapper">
                <Text className="left">От:</Text>
                    <span>{errorStart}</span>
                    <input
                        {...register(`issueDateInterval.startDate`, {
                            required: "Выберите начало поиска",
                            validate: (val, formValues) => validateStart(val, formValues) || 'Дата старта поиска должна быть раньше, чем конец поиска'
                        })} 
                        placeholder="Дата начала"
                        readOnly        
                        onClick={(() => setOpenStart(openStart =>!openStart))} 
                        className={(errorStart ? "error " : "") +"input-element-date"}
                        />
                    <div ref={refStartCalendar}>
                    {openStart &&
                        <Calendar
                        date={format(calendarStart, 'd/MMM/yyyy')}
                        onChange={handleSelectStart}
                        className="calendar-element"
                    />}
                    </div>
                    <Text className="left">До:</Text>
                    <span>{errorEnd}</span>
                    <input
                        {...register(`issueDateInterval.endDate`, {
                            required: "Выберите по какое число искать",
                            validate: (val, formValues ) => myValidateEnd(val, formValues) || 'Дата конца поиска должна быть позже, чем старт поиска'
                        })} 
                        placeholder="Дата окончания"
                        readOnly        
                        onClick={(() => setOpenEnd(openEnd =>!openEnd))} 
                        className={(errorEnd ? "error " : "") +"input-element-date"}
                        />
                    <div ref={refEndCalendar}>
                    {openEnd &&
                        <Calendar
                        date={format(calendarEnd, 'd/MMM/yyyy')}
                        onChange={handleSelectEnd}
                        className="calendar-element"
                    />}
                    </div> 
                </div>

                    )}

export {ColendarComponent}