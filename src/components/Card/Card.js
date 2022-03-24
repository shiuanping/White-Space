import React from "react";
import { Link } from 'react-router-dom';
import { CardWrapper, CardInfo, PriceWrapper, NormalDayPriceWrapper,HolidayPriceWrapper, PriceTimeTag} from "./style";
const Card = (props) => {
    const {room} = props;
    const {holidayPrice, id, imageUrl, name, normalDayPrice} = room;
    return(
        <Link to="/information" state={{id: id}}>
            <CardWrapper style={{backgroundImage: `url(${imageUrl})`}}>
                <CardInfo>
                    <h2>{name}</h2>
                    <PriceWrapper>
                        <NormalDayPriceWrapper>
                            NT.{normalDayPrice}<PriceTimeTag>平日</PriceTimeTag>
                        </NormalDayPriceWrapper>
                        <HolidayPriceWrapper>
                            NT.{holidayPrice}<PriceTimeTag>假日</PriceTimeTag>
                        </HolidayPriceWrapper>
                    </PriceWrapper>
                </CardInfo>
            </CardWrapper>
        </Link>
    )
}
export default Card;