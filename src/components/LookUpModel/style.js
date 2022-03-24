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
    width: 40%;
    min-width: 650px;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 540px){
        width: 90%;
        min-width: auto;
    }
`

export const ContentWrapper = styled.div`
    width: 90%;
    max-height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 2rem 2.5rem;
    overflow: auto;
    @media (max-width: 540px){
        width: 100%;
        padding: 2rem 1.5rem;
    }
`

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    h3{
        margin: 0;
    }
    button{
        font-size: 1.25rem;
        background: transparent;
        padding: .5rem 1rem;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: 0;
        cursor: pointer;
    }
`

export const Title = styled.h3`
    font-size: 1.5rem;
    letter-spacing: 2.51px;
    margin: 0;
`

export const TableWrapper = styled.table`
    border: 0;
    border-collapse: collapse;
    margin-bottom: 2rem;
    overflow: auto;
`
export const TableRow = styled.tr`
    border-bottom: 1px solid #F0F0F0;
    &:first-child{
        border-bottom: 0;
    }
    &:nth-child(odd){
        background: #F0F0F0;
    }
`

export const TableHead = styled.th`
    color: #fff;
    background: #575757;
    padding: .5rem 0;
`

export const TableData = styled.td`
    text-align: center;
    padding: .5rem 0;
`
export const ModelText = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    margin: 1rem 0;
`

export const ButtonRow = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1.5rem;
`

export const Button = styled.button`
    color: #fff;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    background: #484848;
    border: 0;
    padding: .8rem 1.5rem;
    outline: none;
    letter-spacing: .4rem;
    cursor: pointer;
`