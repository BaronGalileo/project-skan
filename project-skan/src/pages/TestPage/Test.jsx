import { useSelector } from "react-redux"
import { Button } from "../../components/Button/Button"
import Cards from "../../components/Test/Cards"
import { Text } from "../../components/Text/Text"
import { TextImage } from "../../components/TextImage/TextAndImage"
import { Img } from "../../components/Img/img"
import { sliserData} from "./dataFile"
import { Carousel } from "./TestSlider"
import { TestBox } from "../../components/Test/TestBox"
import { SliderComponent } from "../../components/Slider/SliderComponent"
import { FlavorForm } from "./Carusel"
import axios from "axios";
import { useEffect, useState } from "react"





function Test() {


    const isAuth = useSelector(state => state.auth);

    const [d, setD] = useState (null)

    const [post, setPost] = useState (null)

    const path = "https://gateway.scan-interfax.ru/api/v1/objectsearch";

    const rec = {
        "issueDateInterval": {
          "startDate": "2023-07-01T00:00:00+03:00",
          "endDate": "2023-08-31T23:59:59+03:00"
        },
        "searchContext": {
          "targetSearchEntitiesContext": {
            "targetSearchEntities": [
              {
                "type": "company",
                "sparkId": null,
                "entityId": null,
                "inn": 7710137066,
                "maxFullness": true,
                "inBusinessNews": null
              }
            ],
            "onlyMainRole": true,
            "tonality": "any",
            "onlyWithRiskFactors": false,
            "riskFactors": {
              "and": [],
              "or": [],
              "not": []
            },
            "themes": {
              "and": [],
              "or": [],
              "not": []
            }
          },
          "themesFilter": {
            "and": [],
            "or": [],
            "not": []
          }
        },
        "searchArea": {
          "includedSources": [],
          "excludedSources": [],
          "includedSourceGroups": [],
          "excludedSourceGroups": []
        },
        "attributeFilters": {
          "excludeTechNews": true,
          "excludeAnnouncements": true,
          "excludeDigests": true
        },
        "similarMode": "duplicates",
        "limit": 10,
        "sortType": "sourceInfluence",
        "sortDirectionType": "desc",
        "intervalType": "month",
        "histogramTypes": [
          "totalDocuments",
          "riskFactors"
        ]
      }

    const conf = { headers: {"Authorization" : `Bearer ${isAuth.token}`} }


    useEffect (() => {
      if(isAuth){
        axios.post(path, rec, conf).then(res => {
          console.log("axios", res.data)
          setD(res.data)
          
      })      }
  
    },[isAuth])

    useEffect (() => {

      const path = "https://gateway.scan-interfax.ru/api/v1/documents"
      if(d){
        d.items.map(index => {
          let dataMy = []
          dataMy.push(index)
          

          console.log(dataMy)
        })

        axios.post(path,

          {
            ids: [
              d.items[0].encodedId
            ]
          }, conf).then(res => {
          setPost(res.data)
          })
      }

    },[d])


    if(d) {
    console.log("post", post)
  }  

    // if(isAuth.isAuth) {
    //     debugger
    //     getDataFromApi(path, isAuth, rec, "post").then(res => {
    //     console.log("res.data",res.data) 
    // }) }

    const items = [
                <>
                <SliderComponent src="./images/auth1.png">Какой-то тект!</SliderComponent>
                <SliderComponent src="./images/auth1.png">Какой-то тект!</SliderComponent>
                <SliderComponent src="./images/auth1.png">Какой-то тект!</SliderComponent>
                <SliderComponent src="./images/auth1.png">Какой-то тект!</SliderComponent>
                <SliderComponent src="./images/auth1.png">Какой-то тект!</SliderComponent>
                </>
    ]
    console.log("sliserData",sliserData.name[1])
    // sliserData.map(slis => {
    //     console.log(slis)
            
    // })
    return(
        <>
        
            <FlavorForm/>
    
    
        
        <div className="test">
            <SliderComponent  src="./images/auth1.png">Какой-то тект!</SliderComponent>
        </div>
        {/* <TSlider></TSlider>

                <TSlider>
                    <SliderComponent src="./images/auth1.png">Какой-то тект!</SliderComponent>
                    <SliderComponent src="./images/auth1.png">Какой-то тект!</SliderComponent>
                    <SliderComponent src="./images/auth1.png">Какой-то тект!</SliderComponent>
                    <SliderComponent src="./images/auth1.png">Какой-то тект!</SliderComponent>
                    <SliderComponent src="./images/auth1.png">Какой-то тект!</SliderComponent>
                </TSlider> */}
        </>  
    )
}



export {Test}