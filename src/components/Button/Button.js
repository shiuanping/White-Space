import { ButtonInner, ButtonWrapper, ButtonShadow,OutlineButtonInner } from "./style";
const Button = (props) => {
    const {text, handleClick, ontline} = props;
    return(
        <ButtonWrapper onClick={handleClick}>
            { ontline? <OutlineButtonInner>{text}</OutlineButtonInner> :<ButtonInner>{text}</ButtonInner>  }
            <ButtonShadow />
        </ButtonWrapper>
    )
}

export default Button;