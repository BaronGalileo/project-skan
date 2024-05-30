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






function Test() {


    const isAuth = useSelector(state => state.auth);

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