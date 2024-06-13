import React from "react";
import { Text } from "../../components/Text/Text";
import { Img } from "../../components/Img/img";
import "./styles.css"
import { SliderCom } from "../../components/Slider/Slider";
import { SliderDataFromApi } from "../../components/Slider/SliderDataFromApi";
import { SliderComponent } from "../../components/Slider/SliderComponent";


function Result() {


    let x = 4200;

    const data = {id: 1, name: "Alex", age: 22, sex: "man"}
    // {id: 1, name: "Alex", age: 22, sex: "man"}

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
                <Text clear className="grey_txt left">Найдено {x} вариантов</Text>
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

            </div>
        </>
    )
}
export default Result