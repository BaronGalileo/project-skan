import React from "react";
import "./styles.css"
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { Img } from "../Img/img";
import format from "date-fns/format";


function CardSkan ({date, title, url, text, themes, wordCount, source}) {

    const time = format(date, 'dd.MM.yyyy')

    const test = "<k>Gh&lt;dss&gt;Привет"

    function sanitize ( str ) {

        if ( !str ) {
            return str;
        }

        let result = ""

        let ampersand = 0

        let teg = 0

        
        for(let i = 0 ; i < str.length; i++) {

                if(str[i] === "<") {
                    teg ++
                }

                else if (str[i] === ">") {
                    teg --
                }

                else if(str[i] === "&" && str[i+1] === "l") {
                    ampersand ++

                }

                else if(str[i] === "&" && str[i+1] === "g") {
                    ampersand --
                    i += 3               
                }

                else if(teg === 0 && ampersand === 0) {

                result += str[i]
                }

                else continue

        }

        return result
    }




    const content = sanitize(text)

    return (
        <>
        <div className="wrapper-card_skan">
            <div className="link-and-time">
                <Text clear className="grey_txt left">{time}</Text>
                <a><Text clear className="grey_txt">{source}</Text></a>
            </div>
            <Text className="left" as="h2">{title}</Text>
            {themes &&
            <Text className="section-card_skan">{themes}</Text>
            }
            <Img  clear className="foto-card_skan" src="./images/test_foto.jpg"></Img>
            <Text clear className="grey_txt left">{content}</Text>
            <div className="footer-card_skan">
                <Button href={url}>Читать в источнике</Button>
                <Text clear className="grey_txt left">{wordCount} слова</Text>
            </div>

        </div>
        </>
    )

}
export {CardSkan} 