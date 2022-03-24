import styled from 'styled-components';
export const ButtonShadow = styled.div`
    width: 100%;
    height: 100%;
    display: none;
    background-image: repeating-linear-gradient(
    45deg,
    #6D7278 0px,
    #6D7278 2px,
    transparent 2px,
    transparent 6px
    );
    position: absolute;
    inset: .5rem;
    z-index: -1;
`

export const ButtonWrapper = styled.div`
    color: #fff;
    font-size: 1.2rem;
    display: inline-block;
    margin: 1rem .5rem;
    position: relative;
    &:hover > div{
        display: block;
    }
`

export const ButtonInner = styled.button`
    color: #fff;
    background: #575757;
    font-size: 1.2rem;
    border: 0;
    padding: .8rem 1.5rem;
    outline: none;
    cursor: pointer;
`

export const OutlineButtonInner = styled.button`
    color: #575757;
    border: 1px solid #575757;
    background: #fff;
    font-size: 1.2rem;
    padding: .8rem 1.5rem;
    outline: none;
    cursor: pointer;
`