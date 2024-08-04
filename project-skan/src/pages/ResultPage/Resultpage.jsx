import React, { useEffect, useState } from "react";
import { Text } from "../../components/Text/Text";
import { Img } from "../../components/Img/img";
import axios from "axios";
import "./styles.css"
import { SliderCom } from "../../components/Slider/Slider";
import { SliderDataFromApi } from "../../components/Slider/SliderDataFromApi";
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { SliderComponent } from "../../components/Slider/SliderComponent";
import { Button } from "../../components/Button/Button";
import { CardSkan } from "../../components/CardSkan/CardSkan";


function Result() {

    const dataFrom = useSelector(state => state.resultDataFromSearch)

    const isAuth = useSelector(state => state.auth);

    const path = "https://gateway.scan-interfax.ru/api/v1/documents"

    const[cardSkan, setCardSkan] = useState([])

    useEffect(() => {
        console.log("cardSkan",cardSkan)
    }, [cardSkan])

    const[start, setStart] = useState(0)

    if(!dataFrom.items & !isAuth.isAuth) return <Navigate to="/"/>

    else if(!dataFrom.items & isAuth.isAuth) return <Navigate to="/search"/>

    const quantity = dataFrom.items.length




    function loadingData () {
       

        dataFrom.items.map((el, item) => {
            let finish = start + 10
            if(item >= start && item < finish) {
                console.log(item, "да")
                let bodyRequest = {
                    "ids": [
                       el.encodedId
                     ]
                   }
                 axios.post(path, bodyRequest, isAuth.confermAut).then(res => {
                    setCardSkan((prev) => [...prev, ...res.data])


                     console.log(res.data, item)

                 })
            }

        })
        return(
            //подгрузка статей по 10 штук
            setStart((prev) => prev+=10)
        )
    }

    function clear() {
        setCardSkan([])

    }




    const data = {id: 1, name: "Alex", age: 22, sex: "man"}


    const frame = ["Период", "Всего", "Риски"]
        
    const resData = [{id: 1, name: "Alex", age: 22, sex: "man"}, {id: 2, name: "Br", age: 26, sex: "man"}, {id: 3, name: "Alex", age: 22,sex: "man"}, {id: 4, name: "Alex", age: 22,sex: "man"}, {id: 5, name: "Alex", age: 22,sex: "man"}, ]

    return(
        <>

            <div className="adjacentTxtImg">
                <div className="acc">
                    <Text font-size="4em" className="textAdjacentImg" as="h1">Ищем. Скоро будут результаты</Text>
                    <Text className="text">Поиск может занять некоторое время, просим сохранять терпение.</Text>
                </div>
                <Img className="imgAdjacentText" src="./images/img_search_result.png"/>
            </div>
            <div className="general_summary">
                <Text className="left" as="h1">Общая сводка</Text>
                <Text clear className="grey_txt left">Найдено {quantity} вариантов</Text>
                {data ?
                <SliderCom  frame={frame}>
                    {resData.map(el => {
                            return(
                                <SliderDataFromApi id={el.id} dataFromApi={el}></SliderDataFromApi>
                                ) 
                    })}
                </SliderCom> :           
                <SliderCom frame={frame}>
                <div className="columns-spiner">
                <div className="spiner">
                    <span class="loader-spiner"></span>
                </div>
                <Text>Загрузка</Text>
                </div>
                <></>

                </SliderCom>}
                <Text className="left" as="h1">Список документов</Text>
                <div className="result_wrapper_card_skan">
                    {cardSkan && cardSkan.map(elem => {

                        return(
                            <CardSkan 
                            date={elem.ok.issueDate} 
                            title={elem.ok.title.text} 
                            url={elem.ok.url} 
                            text={elem.ok.content.markup} 
                            themes={elem.ok.entities.themes[0]?.name} 
                            wordCount={elem.ok.attributes.wordCount}
                            source = {elem.ok.source.name}
                            />
                        )
                    })}
                </div>
                <Button className="show_more" onClick={loadingData}>Показать больше</Button>
                <Button onClick={clear}>Жмых!</Button>

            </div>
        </>
    )
}
export default Result