import React, {useRef} from 'react';
import { Container, LoaderContainer } from "./style";
import "../../style/style.css";

const Loading = (props) => {
    const nodeRef = useRef(null);
    return(
        <Container ref={nodeRef} >
            <Loader />
        </Container>
    )
}

export default Loading;


const Loader = () => {
    return(
        <LoaderContainer>
            <div /><div /><div />
        </LoaderContainer>
    )
}