import styled from "styled-components";

export const Overlay = styled.div`
    width: 100%;
    background: rgba(0,0,0,.7);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    z-index: 2;
`

export const Model = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ImageWrapper = styled.div`
    width: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: width .3s;
    overflow: hidden;
`
export const Image = styled.img`
    width: auto;
    height: auto;
    max-height: 70vh;
    background-size: cover;
    background-position: center 70%;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    @media (max-width: 768px){
        max-height: 50vh;
    }
    @media (max-width: 540px){
        max-height: 30vh;
    }
`

export const ImageInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const ImageText = styled.div`
    font-size: 1rem;
    color: #FFFFFF;
    letter-spacing: 1.67px;
`

export const ArrowBtn = styled.button`
    color: #fff;
    font-size: 5rem;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    @media (max-width: 540px) {
        font-size: 3rem;
    }
`