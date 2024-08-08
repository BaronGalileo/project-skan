import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux"
import { CardSkan } from "../CardSkan/CardSkan";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";

const ResultComponent = () => {

    const dataFrom = useSelector(state => state.resultDataFromSearch)

    const isAuth = useSelector(state => state.auth);

    const[start, setStart] = useState(0)

    const[cardSkan, setCardSkan] = useState([])

    const[isVisible, setIsVisible] = useState(false)

    const path = "https://gateway.scan-interfax.ru/api/v1/documents"

    useEffect(() => {
        if(dataFrom){loadingData()}
      
        },[]);
    
    useEffect(() => {
        if(start>= dataFrom.items.length) {
            setIsVisible(true) 
        }
    }, [start])

    function loadingData () {
       
        dataFrom.items.map((el, item) => {
            let finish = start + 10
            if(item >= start && item < finish) {

                let bodyRequest = {
                        "ids": [
                           el.encodedId
                         ]
                    }
                axios.post(path, bodyRequest, isAuth.confermAut).then(res => {
                    setCardSkan((prev) => [...prev, ...res.data])
    
                })
            }
        })
        return(
        //подгрузка статей по 10 штук
        setStart((prev) => prev+=10)
       )
    }



    return(
        <>
        <Text className="left" as="h1">Список документов</Text>
        <div className="result_wrapper_card_skan">
            {cardSkan && cardSkan.map(elem => {

                return(
                    <CardSkan 
                    date = {elem.ok.issueDate} 
                    title = {elem.ok.title.text} 
                    url = {elem.ok.url} 
                    text = {elem.ok.content.markup} 
                    wordCount = {elem.ok.attributes.wordCount}
                    source = {elem.ok.source.name}
                    isTechNews = {elem.ok.attributes.isTechNews}
                    isAnnouncement= {elem.ok.attributes.isAnnouncement}
                    isDigest = {elem.ok.attributes.isDigest}
                    //Фото для карточек, поскольку в Api нету, сделал пока заглушку. (elem.ok.content.foto - это фейк)
                    // foto = "./images/img_blok.png" 
                    foto = {elem.ok.content.foto}

                    />
                )
            })}
        </div>
        {!isVisible &&
        <Button className="show_more" onClick={loadingData}>Показать больше</Button> 
        }
        </>
    )
}

export { ResultComponent }
