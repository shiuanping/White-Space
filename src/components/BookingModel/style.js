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
    @media (max-width: 768px){
        min-width: 300px;
        width: 90%;
        height: 70%;
    }
`

export const ContentWrapper = styled.div`
    width: 90%;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 2rem 2.5rem;
    @media (max-width: 540px){
        width: 95%;
        padding: 2rem 1.5rem;
    }
    
`
export const Title = styled.h3`
    font-size: 1.5rem;
    letter-spacing: 2.51px;
    margin: 0 0 1rem 0;
`

export const Form = styled.form`
    margin: 1rem 0; 
`

export const InputGroup = styled.div`
    display: flex;
    margin-bottom: 1rem;
    @media (max-width: 768px){
        flex-direction: column;
        margin-bottom: 0;
    }
`

export const InputWrapper = styled.div`
    width: 70%;
    input{
        width: 100%;
    }
    @media (max-width: 768px){
        width: 100%;
    }
`

export const InputGroupInner = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input{
        width: 45%;
    }
    @media (max-width: 768px){
        width: 100%;
    }
`

export const Label = styled.label`
    width: 30%;
    font-size: 1rem;
    letter-spacing: 1.46px;
    padding: .5rem;
    @media (max-width: 768px){
        width: 100%;
        padding: .5rem 0;
    }
`

export const Input = styled.input`
    width: 70%;
    font-size: 1rem;
    text-align: center;
    border: 2px solid #C9C9C9;
    border-radius: 5px;
    padding: .5rem;
    &:focus {
        outline: none;
    }
    &:not(:focus):not(:placeholder-shown):invalid {
	    border-color: #FF5C5C;
    }
    &:not(:focus):not(:placeholder-shown):invalid + p {
        opacity: 1;
    }
`

export const PeriodWrapper = styled.div`
    font-size: 1rem;
    background: #EDEDED;
    padding: 1rem 2.5rem;
    margin: 1.5rem -2.5rem;
    @media (max-width: 540px){
        font-size: .8rem;
        padding: 1rem 1.5rem;
        margin: 1rem -1.5rem;
    }
`

export const PeriodRow = styled.div`
    display: flex;
    justify-content: space-between;
`

export const PeriodText = styled.p`
    color: #6D7278;
    line-height: 2;
    letter-spacing: 1.25px;
    padding: 0 .5rem;
    margin: 0;
`

export const TotalPrice = styled.p`
    color: #FF5C5C;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 2.72px;
    text-align: right;
    margin-bottom: 2rem;
    @media (max-width: 540px){
        font-size: 1.2rem;
    }
`

export const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & button:first-child{
        color: #6D7278;
        background: #D8D8D8;
    }
    & button:nth-child(2){
        color: #fff;
        background: #484848;
    }
`

export const Submit = styled.input`
    color: #fff;
    background: #484848;
    font-size: 1rem;
    font-weight: 700;
    border: 0;
    padding: .8rem 1.5rem;
    outline: none;
    cursor: pointer;
`

export const Button = styled.button`
    font-size: 1rem;
    font-weight: 700;
    border: 0;
    padding: .8rem 1.5rem;
    outline: none;
    cursor: pointer;
`

export const IconWrapper = styled.div`
    color: #ADE8C6;
    text-align: center;
    font-size: 5rem;
`

export const ModelText = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
`

export const InValidText = styled.p`
    color: #FF5C5C;
    font-size: .9rem;
    padding: .25rem 0;
    opacity: 0;
    @media (max-width: 540px){
        font-size: .6rem;
    }
`