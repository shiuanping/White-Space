import styled from 'styled-components';
const bannerImg = require('../../assets/img/banner.jpg')
export const Banner = styled.div`
    width: 100%;
    height: 660px;
    background: url(${bannerImg}) no-repeat center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 170px;
    position: relative;
    @media (max-width: 820px) {
        height: 500px;
    }
`
export const TitleWrapper = styled.div`
    margin: 3rem;
    position: relative;
    z-index: 2;
    @media (max-width: 540px) {
        font-size: 2rem;
    }
`

export const Title = styled.h1`
    width: 148px;
    color: #fff;
    text-align: center;
    background: rgba(220,220,220,0.8);
    border: 2px solid #FFFFFF;
    padding: 26px;
    margin: 0;
    cursor: pointer;
    @media (max-width: 540px) {
        width: 120px;
        font-size: 1.5rem;
    }
`

export const TitleShadow = styled.div`
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
    45deg,
    #ffffff99 0px,
    #ffffff99 2px,
    #ffffff4d 2px,
    #ffffff4d 6px
    );
    position: absolute;
    inset: -1rem;
    z-index: -1;
`

export const Info = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    li, a{
        display: flex;
        align-items: center;
    }
    @media (max-width: 820px) {
        flex-direction: column-reverse;
    }
`

export const Media = styled.ul`
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    li{
        margin: 0;
    }
    a{
        color: #fff;
        margin: 0 .5rem;
    }
    @media (max-width: 820px) {
        margin: 2rem 0;
    }
`

export const Contact = styled.ul`
    padding: 0 2rem;
    border-left: 1px solid #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li{
        margin: .5rem 0;
    }
    a{
        color: #fff;
    }
    p{
        margin: 0 .5rem;
    }
`

export const RoomList = styled.ul`
    max-width: 1000px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: -70px auto 5rem auto;
    @media (max-width: 820px) {
        justify-content: center;
    }
    @media (max-width: 820px) {
        margin: 5rem auto;
    }
`