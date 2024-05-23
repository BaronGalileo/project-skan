import { useSelector } from "react-redux"
import { Button } from "../components/Button"
import Cards from "../components/Cards"
import { Slider } from "../components/Slider"
import TestBox  from "../components/TestBox"
import { Text } from "../components/Text"
import { TextImage } from "../components/TextAndImage"
import { Img } from "../components/img"

function Home() {

    const isAuth = useSelector(state => state.auth);

    const items = [
        <Cards num='1'/>,
        <Cards num='2'/>,
        <Cards num='3'/>,
        <Cards num='4'/>,
        <Cards num='5'/>,
    ]
    
    
    return(
        <>
        <div className="adjacentTxtImg">
            <div className="acc">
                <Text font-size="4em" className="textAdjacentImg" as="h1">сервис по поиску публикаций о компании по его ИНН</Text>
                <Text className="text">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</Text>
                {isAuth.isAuth && <Button onClick={() => {console.log("!!!!")}} className="request">Запросить данные</Button>}
            </div>
            <Img className="imgAdjacentText" src="./images/img_home.png"/>
            
        </div>

        
                {/* <TextImage 
                    font="h1" 
                    classTxt="textAdjacentImg" 
                    classImg="imgAdjacentText" 
                    className="adjacentTxtImg"
                    src="./images/img_home.png"
                    
                >сервис по поиску публикаций о компании по его ИНН</TextImage> */}
            <div className="conteyner">
                <Slider items={items} infinite autoPlay autoPlayInterval={5000}/>
            </div>
        </>  
    )
}

export default Home