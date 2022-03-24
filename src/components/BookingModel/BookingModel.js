import React,{useState, useEffect, useRef} from "react";
import { CSSTransition } from 'react-transition-group';
import { Overlay,Model,ContentWrapper,Title,Form,InputGroup,InputGroupInner,Label,Input,
    PeriodWrapper,PeriodRow,PeriodText,TotalPrice,ButtonRow,Button,IconWrapper,ModelText, InputWrapper, InValidText, Submit} from "./style";
import addDays from "date-fns/addDays";
import {IoMdCheckmarkCircleOutline} from "react-icons/io";
import { MdOutlineError } from "react-icons/md";
import { showScroll } from "../../functions/functions";
import Spinner from "../Spinner/Spinner";
import Divider from "../Divider/Divider";
import "../../style/style.css";
const BookingModel = (props) => {
    const {id, setShowBookingModel, dates,normalDayPrice,holidayPrice} = props;
    const [startDate, endDate] = dates;
    const nodeRef = useRef();
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [bookingCheck, setBookingCheck] = useState(false);
    const [bookingDone, setBookingDone] = useState(false);
    const [bookingSuccess, setBookingSuccess] = useState(null);
    const [range, setRange] = useState([]);
    const [normalDayCount, setNormalDayCount] = useState(0);
    const [holidayCount, setHolidayCount] = useState(0);
    const [fade, setFade] = useState(false);
    const [dimensions, setDimensions] = useState(window.innerWidth);
    useEffect(() => {
        setFade(true);
        showScroll(false);
    },[]);
    useEffect(() => {
        return window.addEventListener('resize', () => {
            setDimensions(window.innerWidth);
        })
    },[]);
    useEffect(() => {
        setRange( getDateRange(startDate,endDate) );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[startDate,endDate]);
    useEffect(() => {
        let holiday = 0;
        let normalDay = 0;
        range.forEach((item) => {
            const date = new Date(item);
            const day = date.getDay();
            if((day === 0)||(day === 5)||(day === 6)){
                holiday += 1;
            }else{
                normalDay +=1;
            };
        });
        setNormalDayCount(normalDay);
        setHolidayCount(holiday);
    },[range])
    const handleClickClose = () => {
        setFade(false);
        setTimeout(() => {
            setShowBookingModel(false);
            showScroll(true);
        }, 300);
    };
    const getDateRange = (startDate, endDate) => {
        const dates = [];
        while(startDate < endDate){
            dates.push(formatDate(startDate));
            startDate = addDays(startDate, 1);
        };
        return dates;
    }
    const formatDate = (time) => {
        const year = time.getFullYear();
        const month = time.getMonth() + 1 > 9 ? time.getMonth() + 1: `0${time.getMonth() + 1}`;
        const date = time.getDate() > 9 ? time.getDate(): `0${time.getDate()}`;
        return `${year}-${month}-${date}`
    };
    const reserve = () => {
        const url = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`;
        const token='1ujOhhjO8doC3146McKZPgkJqoEc7EdCPX1mbZj9MxFzJynuQoKtMOLFCYdX';
        const dates = getDateRange(startDate, endDate);
        const booking = {
            name: name,
            tel: tel,
            date: dates
        };
        fetch(url,{
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        }).then(function checkStatus(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            } else {
                var error = new Error(response.statusText)
                error.response = response
                throw error
            }
        }).then(function(data) {
            setBookingSuccess(true);
            setBookingDone(true);
         }).catch(function(error) {
            console.log('request failed', error);
            setBookingSuccess(false);
            setBookingDone(true);
        });
    }
    const handleReserveClick = () => {
        if((!name)||(!tel)) return;
        setBookingCheck(true);
        reserve();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleReserveClick();
    }
    const ReserveModel = () => {
        return(
            <>
            <Title>預約時段</Title>
            { dimensions > 540 && <Divider />}
            <Form  target="none_iframe"  onSubmit={(e) => handleSubmit(e) }>
                <InputGroup>
                    <Label htmlfor={'name'}>姓名</Label>
                    <InputWrapper>
                        <Input id={'name'} type="text" onBlur={(e) => {setName(e.target.value)}} placeholder=" "
                        pattern='^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$'
                        defaultValue={name} required />
                        <InValidText>
                            <MdOutlineError/> 格式錯誤，請輸入中文或英文字元
                        </InValidText>
                    </InputWrapper>
                </InputGroup>
                <InputGroup>
                    <Label htmlfor={'tel'}>手機號碼</Label>
                    <InputWrapper>
                        <Input id={'tel'} type="tel" onBlur={(e) => {setTel(e.target.value)}} placeholder=" "
                        pattern='09[0-9]{8}' defaultValue={tel} required />
                        <InValidText>
                            <MdOutlineError/> 格式錯誤，手機號碼需為09開頭的10位號碼
                        </InValidText>
                    </InputWrapper>
                </InputGroup>
                <InputGroup>
                    <Label>預約起迄</Label>
                    <InputGroupInner>
                        <Input type="date" value={formatDate(startDate)} readOnly/>
                        ~
                        <Input type="date" value={formatDate(endDate)} readOnly/>
                    </InputGroupInner>
                </InputGroup>
            
            <PeriodWrapper>
                <PeriodRow>
                    <PeriodText>平日時段</PeriodText>
                    <PeriodText>{normalDayCount} 夜</PeriodText>
                </PeriodRow>
                <PeriodRow>
                    <PeriodText>假日時段</PeriodText>
                    <PeriodText>{holidayCount} 夜</PeriodText>
                </PeriodRow>
            </PeriodWrapper>
            <TotalPrice> = NT.{normalDayPrice*normalDayCount+holidayPrice*holidayCount}</TotalPrice>
            <ButtonRow>
                <Button onClick={handleClickClose}>取消</Button>
                <Submit type={'submit'} value='確定預約'></Submit>
                <iframe  title="My Daily Marathon Tracker" name="none_iframe" style={{display:'none'}}></iframe>
            </ButtonRow>
            </Form>
            </>
        )
    };
    const SuccessModel = () => {
        return(
            <>
                <Title>預約成功</Title>
                <IconWrapper>
                    <IoMdCheckmarkCircleOutline/>
                </IconWrapper>
                <ButtonRow style={{'justifyContent': 'flex-end'}}>
                    <Button onClick={handleClickClose}>回首頁</Button>
                </ButtonRow>
            </>
        )
    }
    const FailModel = () => {
        return(
            <>
                <Title>預約失敗</Title>
                <ModelText>預約時間已被人預訂</ModelText>
                <ButtonRow style={{'justifyContent': 'flex-end'}}>
                    <Button onClick={handleClickClose}>返回</Button>
                </ButtonRow>
            </>
        )
    }
    return(
        <CSSTransition nodeRef={nodeRef} in={fade} timeout={300} classNames="fade" >
            <Overlay ref={nodeRef}>
                <Model>
                    <ContentWrapper onClick={((e) => e.stopPropagation())}>
                        { !bookingDone && ( bookingCheck? <Spinner /> : <ReserveModel />)}
                        { bookingDone && (
                            bookingSuccess ? <SuccessModel/> : <FailModel/>
                        )}
                    </ContentWrapper>
                </Model>
            </Overlay>
        </CSSTransition>
    )
}

export default BookingModel;

