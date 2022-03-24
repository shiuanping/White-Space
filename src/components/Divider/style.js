import styled from 'styled-components';

export const DividerWrapper = styled.div`
    display: flex;
    padding: .25rem;
    margin: 1rem 0;
`

export const Line = styled.div`
    width: 9px;
    height: 9px;
    position: relative;
    margin-right: 6px;
    &:before{
        content: '';
        width: 2px;
        height: 12px;
        background: #484848;
        position: absolute;
        inset: 0;
        transform: rotate(-45deg);
    }
`