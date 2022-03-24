import styled, {keyframes} from 'styled-components';

const loadingAni = keyframes`
    0% {
        top: 8px;
        height: 64px;
    }
    50%, 100% {
        top: 24px;
        height: 32px;
    }
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoaderContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin-bottom: 2rem;
    div{
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: #EDEDED;
        animation: ${loadingAni} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
    }
    div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
    }
    div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
    }
`

