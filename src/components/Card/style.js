import styled from "styled-components";

export const CardWrapper = styled.li`
    width: 300px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    background-size: cover;
    background-position: center bottom;
    margin: 0 0 2rem 0;
    box-shadow: 2px 2px 9px 0 rgba(0,0,0,0.18);
    &:hover{
        cursor: pointer;
    }
    &:hover > div > div{
        height: 1.5rem;
    }
    @media (max-width: 820px) {
        margin: 0 2rem 3rem 2rem;
    }
`

export const CardInfo = styled.div`
    width: 100%;
    background: #F7F7F7;
    padding: 1rem 1.5rem;
    h2{
        font-size: 14px;
        color: #000000;
        letter-spacing: 1.46px;
        margin-bottom: 2rem;
    }
`

export const PriceWrapper = styled.div`
    height: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    transition: .3s;

`
export const NormalDayPriceWrapper = styled.div`
    color: #000000;
    font-size: 1.25rem;
`
export const HolidayPriceWrapper = styled.div`
    color: #6D7278;
    font-size: .8rem;
`

export const PriceTimeTag = styled.span`
    font-size: .8rem;
    padding: .5rem;
`