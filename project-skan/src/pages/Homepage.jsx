import { Button } from "../components/Button"
import Cards from "../components/Cards"
import { Slider } from "../components/Slider"
import TestBox  from "../components/TestBox"
import { Text } from "../components/Text"
import { Img } from "../components/img"

function Home() {

    const items = [
        <Cards num='1'/>,
        <Cards num='2'/>,
        <Cards num='3'/>,
        <Cards num='4'/>,
        <Cards num='5'/>,
    ]
    
    
    return(
        <div>
            <TestBox/>
            
            <h1>Главная!</h1>
            <Text as="p" className="test">
                Тест1 Тест1 Тест1 Тест1
            </Text>
            <Text as="h2" className="test2">
                Тест2 Тест2Тест2 Тест2 Тест2 Тест2
            </Text>
            <Text as="p" className="test3">
                Тест3 Тест3Тест3 Тест3 Тест3 Тест3
            </Text>
            <Text  as="p" className="id1" size="3x1">
                Тест2
            </Text>
            <div className="conteyner">
                <Slider items={items} infinite autoPlay autoPlayInterval={5000}/>
            </div>
        </div>  
    )
}

export default Home