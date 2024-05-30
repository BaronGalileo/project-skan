import React, { useEffect, useState } from "react"
import { Img } from "../../components/Img/img"
import { Button } from "../../components/Button/Button"
import { Text } from "../../components/Text/Text"
import { SelectBox } from "../../components/SelectBox/SelectBox"
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { Input } from "../../components/Input/Input"
import { useSelector } from "react-redux"
import "./styles.css"

function Search() {


    const[maxCompleteness, setMaxCompleteness] = useState(false)
    const[businessContext, setBusinessContext] = useState(false)
    const[mainRole, setMainRole] = useState(false)
    const[riskFactors, setRiskFactors] = useState(false)
    const[technicalNews, setTechnicalNews] = useState(false)
    const[calendars, setCalendars] = useState(false)
    const[newsReports, setNewsReports] =useState(false)

    const[inn, setInn] = useState('')
    const [selectChenge, setSelectChenge] = useState({value:""})

    useEffect(() =>{
        console.log(selectChenge)
    }, [selectChenge])

    const showCheckbox = (e) => {
        const element = e.target.nextSibling
        element.classList.contains("is-visible") ? element.classList.remove("is-visible") : element.classList.add("is-visible")
    }


    const opti = [
    {value: '',    text: ''   },
    {value: 'red',    text: 'Red'   },
    {value: 'yellow', text: 'Yellow'},
    {value: 'blue',   text: 'Blue'  }
];
        
    return(

        <div className="page-search-wrapper">
            <div className="search-wrapper">
                <div className="search-element">
                <div className="search-column">
                    <Input placeholder="10 цифр" name="INN"  onChange={setInn}>ИНН компании*</Input>
                    <SelectBox options={opti} onChange={setSelectChenge} placeholder="Любая">Тональность</SelectBox>
                    <Input placeholder="от 1 до 1000" name="Document Count Input"  onChange={setInn}>Количество документов в выдаче*</Input>
                </div>
                <div className="search-column">
                    <Button className="show-checkbox" onClick={showCheckbox}>Показать дополнительные фильтры</Button>
                    <div className="show-check">
                        <Checkbox isChecked={maxCompleteness} onChange={setMaxCompleteness}>Признак максимальной полноты</Checkbox>
                        <Checkbox isChecked={businessContext} onChange={setBusinessContext}>Упоминания в бизнес-контексте</Checkbox>
                        <Checkbox isChecked={mainRole} onChange={setMainRole}>Главная роль в публикации</Checkbox>
                        <Checkbox isChecked={riskFactors} onChange={setRiskFactors}>Публикации только с риск-факторами</Checkbox>
                        <Checkbox isChecked={technicalNews} onChange={setTechnicalNews}>Включать технические новости рынков</Checkbox>
                        <Checkbox isChecked={calendars} onChange={setCalendars}>Включать анонсы и календари</Checkbox>
                        <Checkbox isChecked={newsReports} onChange={setNewsReports}>Включать сводки новостей</Checkbox>
                    </div>
                </div>
                </div>
                <div className="search-element">
                <div className="search-column">
                    <Text className="left">Диапазон поиска*</Text>
                    <div className="search-element">
                        <SelectBox options={opti} onChange={setSelectChenge} placeholder="Дата начала"/>
                        <SelectBox options={opti} onChange={setSelectChenge} placeholder="Дата окончания"/>
                    </div>
                </div>
                <div className="search-column">
                    <Button className="btn-search" disabled>Поиск</Button>
                    <Text>* Обязательные к заполнению поля</Text>
                </div>
                </div>
            </div>
            <Img className="search_img" src="./images/img_search.png"/>
        </div> 
    )
}

export default Search