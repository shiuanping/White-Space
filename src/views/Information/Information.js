import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import {LogoWrapper,Logo,LogoShadow,Content,InfoWrapper,Images,RoomName,RoomDetail, RoomDetailItem, RoomDesc, CheckInAndOutWrapper, CheckTimeTitle, CheckTimeText,
    AmenitiesItem,AmenitiesItemText,Amenities,NormalDayPriceText,PriceTimeTag,HolidayPriceText,PriceWrapper,DatePickerWrapper,
    ImageWrapper,MainImage,SubImageLis,BtnWrapper} from './style';
import { useLocation } from "react-router-dom";
import { IoIosWifi,IoMdWine } from "react-icons/io";
import { RiWindyFill,RiFridgeFill } from "react-icons/ri";
import { GiKnifeFork,GiSofa } from "react-icons/gi";
import { MdOutlineChildCare,MdRoomService,MdSmokeFree,MdMonitor } from "react-icons/md";
import { FaMountain,FaDog } from "react-icons/fa";
import LightBox from "../../components/LightBox/LghtBox";
import RangeDatePicker from "../../components/RangeDatePicker/RangeDatePicker";
import Button from "../../components/Button/Button";
import BookingModel from "../../components/BookingModel/BookingModel";
import LookUpModel from "../../components/LookUpModel/LookUpModel";
import Divider from "../../components/Divider/Divider";
import Loading from "../Loading/Loading";
import { addDays } from 'date-fns';

const Information = (props) => {
    const location = useLocation();
    const {id} = location.state;
    const url='https://challenge.thef2e.com/api/thef2e2019/stage6/';
    const token='1ujOhhjO8doC3146McKZPgkJqoEc7EdCPX1mbZj9MxFzJynuQoKtMOLFCYdX';
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reserveStart, setReserveStart] = useState(addDays(new Date(), 1));
    const [reserveEnd, setReserveEnd] = useState(addDays(new Date(), 2));
    const [showBookingModel, setShowBookingModel] = useState(false);
    const [showLookUpModel, setShowLookUpModel] = useState(false);
    useEffect(() => {
        fetch(`${url}room/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
        }).then(function checkStatus(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            } else {
                var error = new Error(response.statusText)
                error.response = response
                throw error
            }
        })
        .then((data) => {
            setData(data.room[0]);
            setLoading(false);
         }).catch(function(error) {
            console.log('request failed', error);
            alert('error');
        })
    },[id]);
    const handleClick = () => {
        setShowLookUpModel(true);
    };
    const handleReserveClick = () => {
        setShowBookingModel(true);
    };
    return (
        <>
            { showBookingModel && <BookingModel id={id} setShowBookingModel={setShowBookingModel} 
            dates={[reserveStart, reserveEnd]} normalDayPrice={data.normalDayPrice} holidayPrice={data.holidayPrice}  /> }
            { showLookUpModel && <LookUpModel id={id} setShowLookUpModel={setShowLookUpModel} />}
            <>
            { loading ? <Loading /> :
            <>
            <RoomImage imageUrl={data.imageUrl} name={data.name}/>
            <Content>
                <Info data={data}/>
                <DatePickerWrapper>
                    <RangeDatePicker setReserveStart={setReserveStart} setReserveEnd={setReserveEnd}  />
                    <BtnWrapper>
                        <Button text={'預約時段'} handleClick={handleReserveClick} ontline={false}/>
                        <Button text={'預約紀錄'} handleClick={handleClick} ontline={true}/>
                    </BtnWrapper>
                </DatePickerWrapper>
            </Content>
            </>
            }

            </>
        </>
    )
};

export default Information;

const RoomImage = (props) => {
    const imageUrl = props.imageUrl;
    const {name} = props;
    const [showLightBox, setShowLightBox] = useState(false);
    const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
    const handleClick = (index) => {
        setShowLightBox(true);
        setCurrentUrlIndex(index);
    }
    return(
        <>
        {showLightBox && <LightBox name={name} setShowLightBox={setShowLightBox} imageUrl={imageUrl}
         currentUrlIndex={currentUrlIndex} setCurrentUrlIndex={setCurrentUrlIndex} />}
        <ImageWrapper>
            <Link to="/">
                <LogoWrapper>
                    <Logo>WhiteSpace</Logo>
                    <LogoShadow />
                </LogoWrapper>
            </Link>
            <Images>
                <MainImage style={{backgroundImage: `url(${imageUrl[0]})`}} onClick={()=>handleClick(0)}></MainImage>
                <SubImageLis>
                    <div style={{backgroundImage: `url(${imageUrl[1]})`}} onClick={()=>handleClick(1)}></div>
                    <div style={{backgroundImage: `url(${imageUrl[2]})`}} onClick={()=>handleClick(2)}></div>
                </SubImageLis>
            </Images>
        </ImageWrapper>
        </>
    )
}

const Info = (props) => {
    const {name, descriptionShort, description, checkInAndOut,amenities,normalDayPrice,holidayPrice} = props.data;
    const AmenitiesLis = Object.keys(amenities).map((item, index) => <Amenity key={index} name={item} status={amenities[item]} />)
    return (
        <InfoWrapper>
            <div>
                <RoomName>{name}</RoomName>
                <RoomDetail>
                    <RoomDetailItem>客房人數限制：{descriptionShort.GuestMin}~{descriptionShort.GuestMax} 人</RoomDetailItem>
                    <RoomDetailItem>床型：{descriptionShort.Bed[0]}</RoomDetailItem>
                    <RoomDetailItem>衛浴數量：{descriptionShort['Private-Bath']} 間</RoomDetailItem>
                    <RoomDetailItem>房間大小：{descriptionShort.Footage} 平方公尺</RoomDetailItem>
                </RoomDetail>
                <RoomDesc>{description}</RoomDesc>
                <Divider/>
                <CheckInAndOutWrapper>
                    <div>
                        <CheckTimeTitle>Check In</CheckTimeTitle>
                        <CheckTimeText>{checkInAndOut.checkInEarly} — {checkInAndOut.checkInLate}</CheckTimeText>
                    </div>
                    <div>
                        <CheckTimeTitle>Check Out</CheckTimeTitle>
                        <CheckTimeText>{checkInAndOut.checkOut}</CheckTimeText>
                    </div>
                </CheckInAndOutWrapper>
                <Amenities>
                    {AmenitiesLis}
                </Amenities>
            </div>
            <PriceWrapper>
                <div>
                    <NormalDayPriceText>NT.{normalDayPrice}</NormalDayPriceText>
                    <PriceTimeTag>平日(一~四)</PriceTimeTag>
                </div>
                <div>
                    <HolidayPriceText>NT.{holidayPrice}</HolidayPriceText>
                    <PriceTimeTag>假日(五~日)</PriceTimeTag>
                </div>
            </PriceWrapper>
        </InfoWrapper>
    )
}

const Amenity = (props) => {
    const {name,status} = props;
    const setIcon = (name) => {
        if(name === 'Wi-Fi') return <IoIosWifi />
        else if (name === 'Air-Conditioner') return <RiWindyFill />
        else if (name === 'Breakfast') return <GiKnifeFork />
        else if (name === 'Child-Friendly') return <MdOutlineChildCare />
        else if (name === 'Great-View') return <FaMountain />
        else if (name === 'Mini-Bar') return <IoMdWine />
        else if (name === 'Pet-Friendly') return <FaDog />
        else if (name === 'Refrigerator') return <RiFridgeFill />
        else if (name === 'Room-Service') return <MdRoomService />
        else if (name === 'Smoke-Free') return <MdSmokeFree />
        else if (name === 'Sofa') return <GiSofa />
        else if (name === 'Television') return <MdMonitor />
    }
    const AmenityText = (name) => {
        if(name === 'Wi-Fi') return 'Wi-Fi'
        else if (name === 'Air-Conditioner') return '空調'
        else if (name === 'Breakfast') return '早餐'
        else if (name === 'Child-Friendly') return '適合兒童'
        else if (name === 'Great-View') return '漂亮的視野'
        else if (name === 'Mini-Bar') return 'Mini Bar'
        else if (name === 'Pet-Friendly') return '寵物攜帶'
        else if (name === 'Refrigerator') return '冰箱'
        else if (name === 'Room-Service') return 'Room Service'
        else if (name === 'Smoke-Free') return '禁止吸煙'
        else if (name === 'Sofa') return '沙發'
        else if (name === 'Television') return '電視'
    }
    const Icon = setIcon(name);
    return(
        <AmenitiesItem style={status ?{opacity: 1}:null}>
            {Icon}
            <AmenitiesItemText>{AmenityText(name)}</AmenitiesItemText>
        </AmenitiesItem>
    )
}