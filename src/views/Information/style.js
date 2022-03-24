import styled from "styled-components"

export const LogoWrapper = styled.div`
    position: relative;
    position: absolute;
    top: 40px;
    left: 80px;
    z-index: 1;
    @media (max-width: 540px){
        top: 40px;
        left: 20px;
    }
`

export const Logo = styled.h2`
    color: #000;
    font-size: 1.25rem;
    letter-spacing: 1.88px;
    border: 2px solid #000000;
    padding: .5rem 1rem;
    margin: 0;
    background: rgba(227, 231, 234, 0.25);
    
`
export const LogoShadow = styled.div`
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
    45deg,
    #6D7278 0px,
    #6D7278 2px,
    transparent 2px,
    transparent 6px
    );
    position: absolute;
    inset: -.8rem;
    z-index: -1;
`

export const ImageWrapper = styled.div`
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.15);
`

export const Images = styled.div`
    height: 600px;
    display: flex;
    margin-bottom: 2.5rem;
    position: relative;
    div{
        background-size: 100%;
        background-position: center center;
        cursor: pointer;
        position: relative;
        transition: .3s;
        &::before{
            content: '';
            background: rgba(255, 255, 255, 0.3);
            position: absolute;
            inset: 0;
            transition: .3s;
        }
    }
    div:hover{
        background-size: 120%;
    }
    div:hover::before{
        background: rgba(255, 255, 255, 0);
    }
    @media (max-width: 768px){
        height: 400px;
    }
    @media (max-width: 540px){
        height: 300px;
    }
`

export const MainImage = styled.div`
    width: 70%;
`

export const SubImageLis = styled.div`
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    div{
        flex: 1;
    }
`

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto 5rem auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1250px){
        width: 80%;
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 540px){
        width: 90%;
    }
`
export const InfoWrapper = styled.div`
    width: 65%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1250px){
        width: 100%;
        flex-direction: column;
    }
`

export const RoomName = styled.h1`
    font-family: NotoSansCJKtc-Medium;
    font-size: 2.5rem;
    color: #000000;
    letter-spacing: 3.76px;
`

export const RoomDetail = styled.ul`
    font-size: 14px;
    color: #000000;
    list-style: none;
    letter-spacing: 1.46px;
    line-height: 31px;
    padding: 0;
    margin-bottom: 2.5rem;
`

export const RoomDetailItem = styled.li`
    margin-bottom: 1rem;
`

export const RoomDesc = styled.p`
    font-family: NotoSansCJKtc-Light;
    font-size: .8rem;
    color: #000000;
    letter-spacing: 1.25px;
    text-align: justify;
    line-height: 1.25rem;
    margin-bottom: 1.5rem;
`

export const CheckInAndOutWrapper = styled.div`
    color: #000000;
    display: flex;
    margin-bottom: 2.5rem;
    & > div{
        width: 50%;
    }
`

export const CheckTimeTitle = styled.div`
    font-size: .875rem;
    letter-spacing: 1.46px;
    margin-bottom: .5rem;
`

export const CheckTimeText = styled.div`
    font-size: 1.25rem;
    letter-spacing: 2.19px;
    @media (max-width: 540px){
        font-size: 1rem;
        letter-spacing: 0;
    }
`

export const Amenities = styled.ul`
    background: #F0F0F0;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1250px){
        margin-bottom: 3rem;
    }
`

export const AmenitiesItem = styled.li`
    width: 33%;
    color: #3A3A3A;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    opacity: .2;
    @media (max-width: 540px){
        width: 50%;
    }
`

export const AmenitiesItemText = styled.p`
    font-family: NotoSansCJKtc-Light;
    font-size: .8rem;
    letter-spacing: 1.25px;
    margin: 0 1rem;
`

export const PriceWrapper = styled.div`
    text-align: right;
    margin: 2rem 4rem 0 0;
    @media (max-width: 1250px){
        text-align: left;
        display: flex;
        margin: 0 0 3rem 0;
        div{
            flex: 1;
            display: flex;
            flex-direction: column-reverse;
        }
    }
`

export const NormalDayPriceText = styled.p`
    font-size: 2rem;
    letter-spacing: 3.13px;
    margin-bottom: .5rem;
    @media (max-width: 540px){
        font-size: 1.5rem;
    }
`

export const HolidayPriceText = styled.p`
    font-size: 1rem;
    letter-spacing: 3.13px;
    margin-bottom: .5rem;
    @media (max-width: 1250px){
        font-size: 2rem;
    }
    @media (max-width: 540px){
        font-size: 1.5rem;
    }
`

export const PriceTimeTag = styled.span`
    color: #6D7278;
    font-size: .8rem;
    display: block;
    padding: .5rem;
    @media (max-width: 1250px){
        padding: 0
    }
`

export const DatePickerWrapper = styled.div`
    width: 35%;
    @media (max-width: 1250px){
        width: 50%;
        align-self: flex-start;
    }
    @media (max-width: 580px){
        width: 100%;
    }
`
export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 -.5rem;
    
`

