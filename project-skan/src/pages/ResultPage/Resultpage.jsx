import React from "react";
import { Text } from "../../components/Text/Text";
import { Img } from "../../components/Img/img";
import "./styles.css"
import { SliderCom } from "../../components/Slider/Slider";
import { SliderDataFromApi } from "../../components/Slider/SliderDataFromApi";
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { ResultComponent } from "../../components/ResultComponent/ResultComponent";



function Result() {

    const dataFrom = useSelector(state => state.resultDataFromSearch);

    const isAuth = useSelector(state => state.auth);

    const dataFromApi = useSelector(state => state.histograms);

    if(!isAuth.isAuth) return <Navigate to="/"/>

    else if(!dataFrom.items) return <Navigate to="/search"/>

    const quantity = dataFrom.items.length

    const frame = ["Период", "Всего", "Риски"]
        
    return(
        <>

            <div className="adjacentTxtImg">
                <div className="acc">
                    <Text fontSize="4em" className="textAdjacentImg" as="h1">Ищем. Скоро будут результаты</Text>
                    <Text className="text">Поиск может занять некоторое время, просим сохранять терпение.</Text>
                </div>
                <Img className="imgAdjacentText" src="./images/img_search_result.png"/>
            </div>
            <div className="general_summary">
                <Text className="left" as="h1">Общая сводка</Text>
                <Text clear className="grey_txt left">Найдено {quantity} вариантов</Text>
                {dataFromApi ?
                <SliderCom  frame={frame}>
                    {dataFromApi.data[0].data?.map((el, item) => {
                            return(
                                <SliderDataFromApi key={item} dataFromApi={el}></SliderDataFromApi>
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
                <ResultComponent/>


            </div>
        </>
    )
}
export default Result