import React,{useState,useEffect, useRef} from "react";
import { CSSTransition } from 'react-transition-group';
import { Overlay,Model,ImageWrapper,Image,ImageInfo,ImageText,ArrowBtn } from "./style";
import { BiChevronLeft,BiChevronRight } from "react-icons/bi";
import { showScroll } from "../../functions/functions";
import "../../style/style.css";

const LightBox = (props) => {
    const {name,setShowLightBox,imageUrl,currentUrlIndex,setCurrentUrlIndex} = props;
    const nodeRef = useRef();
    const img = useRef();
    const imgWrapper = useRef();
    const [fade, setFade] = useState(false);
    useEffect(() => {
        setFade(true);
        showScroll(false);
    },[]);
    const handleClickClose = () => {
        setFade(false);
        setTimeout(() => {
            setShowLightBox(false);
            showScroll(true);
        },300);
    };
    const handleImageOnload = () => {
        const image = img.current;
        const ImageWrapper = imgWrapper.current;
        const {width} = image;
        ImageWrapper.style.width = `${width}px`;
    }
    const handleClickChangePage = (direction) => {
        if(direction === 0){
            if(currentUrlIndex === 0){
                setCurrentUrlIndex(imageUrl.length-1);
                return;
            }
            setCurrentUrlIndex(currentUrlIndex-1);
        }
        else {
            if(currentUrlIndex === (imageUrl.length-1)){
                setCurrentUrlIndex(0);
                return;
            };
            setCurrentUrlIndex(currentUrlIndex+1);
        }
    }
    const handleArrowClick = (e, num) => {
        e.stopPropagation();
        handleClickChangePage(num);
    };
    return(
        <CSSTransition nodeRef={nodeRef} in={fade} timeout={5000} classNames="fade" >
        <Overlay ref={nodeRef} onClick={handleClickClose} >
            <Model>
                <ArrowBtn onClick={(e)=> handleArrowClick(e, 0)}>
                    <BiChevronLeft/>
                </ArrowBtn>
                <ImageWrapper ref={imgWrapper} onClick={((e) => e.stopPropagation())} >
                    <Image ref={img} src={imageUrl[currentUrlIndex]} onLoad={handleImageOnload} />
                    <ImageInfo>
                        <ImageText>{name}</ImageText>
                        <ImageText>{currentUrlIndex+1}/{imageUrl.length}</ImageText>
                    </ImageInfo>
                </ImageWrapper>
                <ArrowBtn onClick={((e) => handleArrowClick(e, 1))}>
                    <BiChevronRight/>
                </ArrowBtn>
            </Model>
        </Overlay>
        </CSSTransition>
    )
}

export default LightBox;