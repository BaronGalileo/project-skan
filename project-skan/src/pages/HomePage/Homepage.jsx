import { useSelector } from "react-redux"
import { Button } from "../../components/Button/Button"
import { Text } from "../../components/Text/Text"
import { Img } from "../../components/Img/img"
import { SliderCom } from '../../components/Slider/Slider'
import { SliderComponent } from "../../components/Slider/SliderComponent"
import { Rates } from "../../components/Rates/Rates"


function Home() {

    const isAuth = useSelector(state => state.auth);



    
    return(
        <>
        <div className="adjacentTxtImg">
            <div className="acc">
                <Text fontSize="4em" className="textAdjacentImg" as="h1">сервис по поиску публикаций о компании по его ИНН</Text>
                <Text className="text">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</Text>
                {isAuth.isAuth && <Button  href="/search"  className="request">Запросить данные</Button>}
            </div>
            <Img className="imgAdjacentText" src="./images/img_home.png"/>
            
        </div>
        <SliderCom>
            <SliderComponent src="./images/img_blok.png" classTxt="text">Высокая и оперативная скорость обработки заявки 1!</SliderComponent>
            <SliderComponent src="./images/img_blok.png" classTxt="text">Высокая и оперативная скорость обработки заявки 2!</SliderComponent>
            <SliderComponent src="./images/img_blok.png" classTxt="text">Какой-то тект 3!</SliderComponent>
            <SliderComponent src="./images/img_blok.png" classTxt="text">Какой-то тект 4!</SliderComponent>
            <SliderComponent src="./images/img_blok.png" classTxt="text">Какой-то тект 5!</SliderComponent>
            <SliderComponent src="./images/img_blok.png" classTxt="text">Какой-то тект 6!</SliderComponent>
            <SliderComponent src="./images/img_blok.png" classTxt="text">Какой-то тект 7!</SliderComponent>
            <SliderComponent src="./images/img_blok.png" classTxt="text">Какой-то тект 8!</SliderComponent>     
        </SliderCom>
        <Img src="/images/img_home2.png" className="img_home"/>
        <Text  as="h3" className="bold">Наши тарифы</Text>
        <Rates/>


        </>  
    )
}

export default Home