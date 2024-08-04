import React, { useEffect, useState } from "react"
import { Img } from "../../components/Img/img"
import { Button } from "../../components/Button/Button"
import { Text } from "../../components/Text/Text"
import { SelectBox } from "../../components/SelectBox/SelectBox"
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { Input } from "../../components/Input/Input"
import { useSelector, useDispatch } from "react-redux"
import { useFormContext } from "react-hook-form"
import { ColendarComponent } from "../../components/ColendarComponent/ColendarComponent"
import axios from "axios";
import "./styles.css"
import { SearchFormHidden } from "../../components/SearchComponentHidden/SearchComponentHidden"
import { Navigate } from "react-router-dom";
import { removeResult, setResult } from "../../store/resultDataSlice"



function Search() {

  const[changePage, setChangePage] = useState(false)

  const dispatch = useDispatch();

 
  const {
    handleSubmit,
    formState: {isValid},

  } = useFormContext()

 
  const isAuth = useSelector(state => state.auth)

    
  const showCheckbox = (e) => {
      const element = e.target.nextSibling
      element.classList.contains("is-visible") ? element.classList.remove("is-visible") : element.classList.add("is-visible")
  }

  const path = "https://gateway.scan-interfax.ru/api/v1/objectsearch"








  const onSubmit = (data) => {
     axios.post(path, data, isAuth.confermAut).then(res => {
      if(res.data.items.length > 0 ) {
        dispatch(setResult(res.data))
        setChangePage(true)
      } 
      else {
        dispatch(removeResult())
        alert("К сожалению ниего не удалось найти. Попробуйте фильтр поменять, тональность или проверьте ИНН")
      }
    }
      
      )
    }


  const tonality = [
    {value: 'any', text: 'Любая'},
    {value: 'positive', text: 'Позитивная'},
    {value: 'negative', text: 'Негативная'},
  ];

  const errorSubmit = (data) => {
  }

  if(changePage) return <Navigate to="/result"/>

        
  return( 
    <div className="page-search-wrapper">
            <div className="search-wrapper">
              <form onSubmit={handleSubmit(onSubmit, errorSubmit)}>
                <div className="search-element">
                <div className="search-column">
                    <Input type="number" placeholder="10 цифр" name="searchContext.targetSearchEntitiesContext.targetSearchEntities.0.inn" message="Обязательное поле! Только числа">ИНН компании*</Input>
                    <SelectBox options={tonality} defaultSelect={"any"} name="searchContext.targetSearchEntitiesContext.tonality" placeholder={"Любая"}>Тональность</SelectBox>
                    <Input  type="number" placeholder="от 1 до 1000" name="limit" message="Обязательное поле! Только числа">Количество документов в выдаче*</Input>
                </div>
                <div className="search-column">
                    <Button className="show-checkbox" onClick={showCheckbox}>Показать дополнительные фильтры</Button>
                    <div className="show-check">
                        <Checkbox  name="searchContext.targetSearchEntitiesContext.targetSearchEntities.0.maxFullness" >Признак максимальной полноты</Checkbox>
                        <Checkbox  name="searchContext.targetSearchEntitiesContext.targetSearchEntities.0.inBusinessNews" >Упоминания в бизнес-контексте</Checkbox>
                        <Checkbox  name="searchContext.targetSearchEntitiesContext.onlyMainRole" >Главная роль в публикации</Checkbox>
                        <Checkbox  name="searchContext.targetSearchEntitiesContext.onlyWithRiskFactors" >Публикации только с риск-факторами</Checkbox>
                        <Checkbox  name="attributeFilters.excludeTechNews" >Исключить технические новости</Checkbox>
                        <Checkbox  name="attributeFilters.excludeAnnouncements" >Исключить анонсы и события</Checkbox>
                        <Checkbox  name="attributeFilters.excludeDigests" >Исключить сводки новостей</Checkbox>
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
                    <SearchFormHidden/>
                </div>
                </div>
              </form>
            </div>
            <Img className="search_img" src="./images/img_search.png"/>
        </div>
    )
}

export default Search