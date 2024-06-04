import React, { useEffect, useState } from "react"
import { Img } from "../../components/Img/img"
import { Button } from "../../components/Button/Button"
import { Text } from "../../components/Text/Text"
import { SelectBox } from "../../components/SelectBox/SelectBox"
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { Input } from "../../components/Input/Input"
import { useSelector } from "react-redux"
import format from "date-fns/format";
import axios from "axios"
import { ColendarComponent } from "../../components/ColendarComponent/ColendarComponent"

import "./styles.css"


function Search() {


    const[maxCompleteness, setMaxCompleteness] = useState(false)
    const[businessContext, setBusinessContext] = useState(false)
    const[mainRole, setMainRole] = useState(false)
    const[riskFactors, setRiskFactors] = useState(false)
    const[technicalNews, setTechnicalNews] = useState(false)
    const[calendars, setCalendars] = useState(false)
    const[newsReports, setNewsReports] =useState(false)
    const[startSearch, setStartSearch] = useState(null)
    const[endSearch, setEndSearch] = useState(null)
    const[limit, setLimit] = useState(null)

    const[inn, setInn] = useState('')
    const [selectTonality, setSelectTonality] = useState({value:"any"})

    const isAuth = useSelector(state => state.auth)

    useEffect(() =>{
        console.log("limit", limit)

    }, [limit])

    useEffect(() =>{
        console.log("startSearch",startSearch)
        console.log("dataToSend",dataToSend)

    }, [startSearch, endSearch, selectTonality, riskFactors,mainRole])

    const showCheckbox = (e) => {
        const element = e.target.nextSibling
        element.classList.contains("is-visible") ? element.classList.remove("is-visible") : element.classList.add("is-visible")
    }

    const path = "https://gateway.scan-interfax.ru/api/v1/objectsearch"

    const conf = { headers: {"Authorization" : `Bearer ${isAuth.token}`}}

    // const dataToSend = {
    //     "issueDateInterval": {
    //       "startDate": `${startSearch}T00:00:00+03:00`,
    //       "endDate": `${endSearch}T23:59:59+03:00`
    //     },
    //     "searchContext": {
    //       "targetSearchEntitiesContext": {
    //         "targetSearchEntities": [
    //           {
    //             "type": "company",
    //             "sparkId": null,
    //             "entityId": null,
    //             "inn": `${inn.INN}`,
    //             "maxFullness": true,
    //             "inBusinessNews": null
    //           }
    //         ],
    //         "onlyMainRole": true,
    //         "tonality": "any",
    //         "onlyWithRiskFactors": false,
    //         "riskFactors": {
    //           "and": [],
    //           "or": [],
    //           "not": []
    //         },
    //         "themes": {
    //           "and": [],
    //           "or": [],
    //           "not": []
    //         }
    //       },
    //       "themesFilter": {
    //         "and": [],
    //         "or": [],
    //         "not": []
    //       }
    //     },
    //     "searchArea": {
    //       "includedSources": [],
    //       "excludedSources": [],
    //       "includedSourceGroups": [],
    //       "excludedSourceGroups": []
    //     },
    //     "attributeFilters": {
    //       "excludeTechNews": true,
    //       "excludeAnnouncements": true,
    //       "excludeDigests": true
    //     },
    //     "similarMode": "duplicates",
    //     "limit": `${limit.Limit}`,
    //     "sortType": "sourceInfluence",
    //     "sortDirectionType": "desc",
    //     "intervalType": "month",
    //     "histogramTypes": [
    //       "totalDocuments",
    //       "riskFactors"
    //     ]
    //   }

      const dataToSend = {
        issueDateInterval: {
          startDate: `${startSearch}`,
          endDate: `${endSearch}`
        },
        searchContext: {
          targetSearchEntitiesContext: {
            targetSearchEntities: [
              {
                type: "company",
                sparkId: null,
                entityId: null,
                inn: `${inn.INN}`,
                maxFullness: true,
                inBusinessNews: null
              }
            ],
            onlyMainRole: `${mainRole}`,
            tonality: `${selectTonality.value}`,
            onlyWithRiskFactors: `${riskFactors}`,
          },
        },
        searchArea: {
          includedSources: [],
          excludedSources: [],
          includedSourceGroups: [],
          excludedSourceGroups: []
        },
        attributeFilters: {
          excludeTechNews: true,
          excludeAnnouncements: true,
          excludeDigests: true
        },
        similarMode: "duplicates",
        limit: `${limit}`,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: [
          "totalDocuments",
          "riskFactors"
        ]
      }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(path, dataToSend, conf)
        .then(res => {
            console.log("dataTosend", res.data)
        
        })
        .catch(err => alert(err))
    }


    const tonality = [
    {value: 'any', text: 'Любая'},
    {value: 'positive', text: 'Позитивная'},
    {value: 'negative', text: 'Негативная'},
];


        
    return(

        <div className="page-search-wrapper">
            <div className="search-wrapper">
                <div className="search-element">
                <div className="search-column">
                    <Input placeholder="10 цифр" name="INN"  onChange={setInn}>ИНН компании*</Input>
                    <SelectBox options={tonality} onChange={setSelectTonality} placeholder={"Любая"}>Тональность</SelectBox>
                    <Input onlyValue placeholder="от 1 до 1000" name="Limit"  onChange={setLimit}>Количество документов в выдаче*</Input>
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
                        <ColendarComponent dateToSend={setStartSearch} className="start-data">Дата начала</ColendarComponent>
                        <ColendarComponent dateToSend={setEndSearch} className="end-data">Дата окончания</ColendarComponent>
                    </div>
                </div>
                <div className="search-column">
                    <Button className="btn-search" disabled onClick={handleSubmit}>Поиск</Button>
                    <Button onClick={handleSubmit}>Поиск_Туст</Button>
                    <Text>* Обязательные к заполнению поля</Text>
                </div>
                </div>
            </div>
            <Img className="search_img" src="./images/img_search.png"/>
        </div> 
    )
}

export default Search