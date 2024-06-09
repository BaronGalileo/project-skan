import React, { useEffect, useState } from "react"
import { Img } from "../../components/Img/img"
import { Button } from "../../components/Button/Button"
import { Text } from "../../components/Text/Text"
import { SelectBox } from "../../components/SelectBox/SelectBox"
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { Input } from "../../components/Input/Input"
import { useSelector } from "react-redux"
import { useFormContext } from "react-hook-form"
import axios from "axios"
import { ColendarComponent } from "../../components/ColendarComponent/ColendarComponent"

import "./styles.css"
import { element } from "prop-types"


function Search() {

  const {
    handleSubmit,
    formState: {isValid, errors},

  } = useFormContext()

  const [selectTonality, setSelectTonality] = useState({value:"any"})

  const isAuth = useSelector(state => state.auth)

    
  const showCheckbox = (e) => {
      const element = e.target.nextSibling
      element.classList.contains("is-visible") ? element.classList.remove("is-visible") : element.classList.add("is-visible")
  }

  const path = "https://gateway.scan-interfax.ru/api/v1/objectsearch"

  const conf = { headers: {"Authorization" : `Bearer ${isAuth.token}`}}


      // const dataToSend = {
      //   issueDateInterval: {
      //     startDate: '',
      //     endDate: '',
      //   },
      //   searchContext: {
      //     targetSearchEntitiesContext: {
      //       targetSearchEntities: [
      //         {
      //           type: "company",
      //           sparkId: null,
      //           entityId: null,
      //           inn: '',
      //           maxFullness: '',
      //           inBusinessNews: ''
      //         }
      //       ],
      //       onlyMainRole: '',
      //       tonality: '',
      //       onlyWithRiskFactors: '',
      //     },
      //   },
      //   searchArea: {
      //     includedSources: [],
      //     excludedSources: [],
      //     includedSourceGroups: [],
      //     excludedSourceGroups: []
      //   },
      //   attributeFilters: {
      //     excludeTechNews: '',
      //     excludeAnnouncements: '',
      //     excludeDigests: '',
      //   },
      //   similarMode: "duplicates",
      //   limit: '',
      //   sortType: "sourceInfluence",
      //   sortDirectionType: "desc",
      //   intervalType: "month",
      //   histogramTypes: [
      //     "totalDocuments",
      //     "riskFactors"
      //   ]
      // }


  const onSubmit = (data) => {
      console.log("DATA",data)
    }


  const tonality = [
    {value: 'any', text: 'Любая'},
    {value: 'positive', text: 'Позитивная'},
    {value: 'negative', text: 'Негативная'},
  ];

  const errorSubmit = (data) => {
    console.log(data)
  }






        
  return(    
    <div className="page-search-wrapper">
            <div className="search-wrapper">
              <form onSubmit={handleSubmit(onSubmit, errorSubmit)}>
                <div className="search-element">
                <div className="search-column">
                    <Input placeholder="10 цифр" name="searchContext.targetSearchEntitiesContext.targetSearchEntities.inn" message="Обязательно заполнить!">ИНН компании*</Input>
                    <SelectBox options={tonality} onChange={setSelectTonality} placeholder={"Любая"}>Тональность</SelectBox>
                    <Input  placeholder="от 1 до 1000" name="limit" message="Обязательно заполнить!">Количество документов в выдаче*</Input>
                </div>
                <div className="search-column">
                    <Button className="show-checkbox" onClick={showCheckbox}>Показать дополнительные фильтры</Button>
                    <div className="show-check">
                        <Checkbox  name="searchContext.targetSearchEntitiesContext.targetSearchEntities.maxFullness" >Признак максимальной полноты</Checkbox>
                        <Checkbox  name="searchContext.targetSearchEntitiesContext.targetSearchEntities.inBusinessNews" >Упоминания в бизнес-контексте</Checkbox>
                        <Checkbox  name="searchContext.targetSearchEntitiesContext.targetSearchEntities.onlyMainRole" >Главная роль в публикации</Checkbox>
                        <Checkbox  name="searchContext.targetSearchEntitiesContext.targetSearchEntities.onlyWithRiskFactors" >Публикации только с риск-факторами</Checkbox>
                        <Checkbox  name="excludeTechNews" >Исключить технические новости</Checkbox>
                        <Checkbox  name="excludeAnnouncements" >Исключить анонсы и события</Checkbox>
                        <Checkbox  name="excludeDigests" >Исключить сводки новостей</Checkbox>
                    </div>
                </div>
                </div>
                <div className="search-element">
                <div className="search-column">
                    <Text className="left">Диапазон поиска*</Text>
                    <div className="search-element">
                        <ColendarComponent/>
                    </div>
                </div>
                <div className="search-column">
                    <Button className="btn-search" type="submit" onClick={handleSubmit(onSubmit)} disabled={!isValid}>Поиск</Button>
                    <Text as="a" onClick={handleSubmit(errorSubmit)} >* Обязательные к заполнению поля</Text>
                    <Button >Test</Button>
                </div>
                </div>
              </form>
            </div>
            <Img className="search_img" src="./images/img_search.png"/>
        </div>
    )
}

export default Search