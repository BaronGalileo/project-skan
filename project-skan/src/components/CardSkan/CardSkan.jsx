import React from "react";
import "./styles.css"
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { Img } from "../Img/img";
import format from "date-fns/format";
import { textOnly } from "../../helpers/textOnly";


function CardSkan ({date, title, url, text, isTechNews, isAnnouncement, isDigest, wordCount, source, foto}) {

    const time = format(date, 'dd.MM.yyyy')

    const content = textOnly(text)

    const techNews = isTechNews? "технические новости": null

    const announcement = isAnnouncement? "анонсы и события": null

    const digest = isDigest? "сводки новостей": null

    return (
        <>
        <div className="wrapper-card_skan">
            <div className="link-and-time">
                <Text clear className="grey_txt left">{time}</Text>
                <a href={url}><Text clear className="grey_txt">{source}</Text></a>
            </div>
            <Text className="left" as="h2">{title}</Text>
            {techNews &&
            <Text className="section-card_skan">{techNews}</Text>
            }
            {announcement &&
            <Text className="section-card_skan">{announcement}</Text>
            }
            {digest &&
            <Text className="section-card_skan">{digest}</Text>
            }
            {foto && <Img  clear className="foto-card_skan" src={foto}></Img>}
            {!foto && <Img  clear className="foto-card_skan" src="./images/test_foto.jpg"></Img>}
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