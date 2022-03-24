import styled, {keyframes} from 'styled-components';

const loadingAni = keyframes`
    0% {
      top: 8px;
      height: 128px;
    }
    50%, 100% {
      top: 24px;
      height: 64px;
    }
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
`

export const LoaderContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 160px;
    height: 160px;
    div{
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 32px;
        background: #EDEDED;
        animation: ${loadingAni} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    div:nth-child(1) {
        left: 16px;
        animation-delay: -0.24s;
    }
    div:nth-child(2) {
        left: 64px;
        animation-delay: -0.12s;
    }
    div:nth-child(3) {
        left: 112px;
        animation-delay: 0;
    }
`

