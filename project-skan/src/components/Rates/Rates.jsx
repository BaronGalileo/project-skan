import React, {useState} from "react";
import { TextImage } from "../TextImage/TextAndImage";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";

function Rates() {

    const [visible, setVisible] = useState(false);

    function tariffСhange() {
        const elements = document.querySelectorAll(".business")
        elements.forEach((element) => element.classList.add('active-tarif'));

    }


    return(
        <div className="our_rates">
            <div className="column-rates beginer">
                <TextImage font="h2" className="box-rates" classImg="logo rates_logo" src="./images/bulb.png">Beginer</TextImage>
                <Text className="text"> Для небольшого исследования</Text>
                <div className="rates-section">
                    <div className="conteyner price">
                        <Text as="h2">799 &#8381; </Text>
                        <Text className="text-is-not-active">1 200 &#8381;</Text>
                        <Text className="rate-activ ">Текущий тариф</Text>
                    </div>
                    <Text className="italic">или 150 ₽/мес. при рассрочке на 24 мес</Text>
                    <div className="tariff_includes">
                        <Text as="h3">В тариф входит:</Text>
                        <TextImage isImage className="tariff_logo_text" classImg="logo_mini" src="./images/img_icons.png">Безлимитная история запросов</TextImage>
                        <TextImage isImage className="tariff_logo_text" classImg="logo_mini" src="./images/img_icons.png">Безопасная сделка</TextImage>
                        <TextImage isImage className="tariff_logo_text" classImg="logo_mini" src="./images/img_icons.png">Поддержка 24/7</TextImage>
                        <Button onClick={() => setVisible(!visible)}>Перейти в личный кабинет : {!visible ? "hidden" : "visible"}</Button>
                    </div>

                </div>
            </div>
            <div className="column-rates pro">
                <TextImage font="h2" className="box-rates" classImg="logo rates_logo" src="./images/laptop_PNG101815.png">PRO</TextImage>
                <Text className="text"> Для HR и фрилансеров</Text>
                <div className="rates-section">
                    <div className="conteyner price">
                        <Text as="h2">1 299 &#8381; </Text>
                        <Text className="text-is-not-active" >2 600 &#8381;</Text>
                        <Text className="rate-activ" style={{visibility:  !visible ? "hidden" : "visible"}}>Текущий тариф</Text>
                    </div>
                    <Text className="italic">или 279 ₽/мес. при рассрочке на 24 мес.</Text>
                    <div className="tariff_includes">
                        <Text as="h3">В тариф входит:</Text>
                        <TextImage isImage className="tariff_logo_text" classImg="logo_mini" src="./images/img_icons.png">Все пункты тарифа Beginner</TextImage>
                        <TextImage isImage className="tariff_logo_text" classImg="logo_mini" src="./images/img_icons.png">Экспорт истории</TextImage>
                        <TextImage isImage className="tariff_logo_text" classImg="logo_mini" src="./images/img_icons.png">Рекомендации по приоритетам</TextImage>
                        <Button onClick={tariffСhange}>Chek</Button>
                    </div>

                </div>
            </div>
            <div className="column-rates business">
                <TextImage font="h2" classTxt="white" className="box-rates" classImg="logo rates_logo" src="./images/watch.png">Business</TextImage>
                <Text className="text white"> Для корпаротивных клиентов</Text>
                <div className="rates-section">
                    <div className="conteyner price">
                        <Text as="h2">2 379 &#8381; </Text>
                        <Text className="text-is-not-active">3 700 &#8381;</Text>
                        <Text className="rate-activ business ">Текущий тариф</Text>
                    </div>
                    <div className="tariff_includes">
                        <Text as="h3">В тариф входит:</Text>
                        <TextImage isImage className="tariff_logo_text" classImg="logo_mini" src="./images/img_icons.png">Все пункты тарифа Pro</TextImage>
                        <TextImage isImage className="tariff_logo_text" classImg="logo_mini" src="./images/img_icons.png">Безлимитное количество запросов</TextImage>
                        <TextImage isImage className="tariff_logo_text" classImg="logo_mini" src="./images/img_icons.png">Приоритетная поддержка</TextImage>
                        <Button onClick={tariffСhange}>Chek</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export {Rates}