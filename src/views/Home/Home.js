import React, {useState, useEffect} from 'react';
import Card from '../../components/Card/Card';
import {Banner,TitleWrapper, Title,TitleShadow, Media, Info, Contact, RoomList} from './style';
import Loading from '../Loading/Loading';
import { FaPhoneAlt,FaHome,FaFacebookSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";

const Home = () => {
    const url='https://challenge.thef2e.com/api/thef2e2019/stage6/';
    const token='1ujOhhjO8doC3146McKZPgkJqoEc7EdCPX1mbZj9MxFzJynuQoKtMOLFCYdX';
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`${url}rooms`,{
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
        }).then(function(data) {
            setData(data.items);
            setLoading(false);
         }).catch(function(error) {
            console.log('request failed', error);
            alert('error');
        })
    },[]);
    const handleReLoad = () => {
        window.location.reload(true);
    };
    let RoomCards = data.map((item, index) => <Card key={index} room={item}></Card>)
    return(
        <>
            { loading? <Loading loading={loading} /> :
            <>
            <Banner>
                <TitleWrapper>
                    <Title onClick={handleReLoad}>White<br/>Space</Title>
                    <TitleShadow/>
                </TitleWrapper>
                <Info>
                    <Media>
                        <li>
                            <a href="#"><BsInstagram/></a>
                        </li>
                        <li>
                            <a href="#"><FaFacebookSquare/></a>
                        </li>
                    </Media>
                    <Contact>
                        <li>
                            <a href="tel:02 17264937">
                                <FaPhoneAlt/>
                                <p>02-17264937</p>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:whitespace@whitespace.com.tw">
                                <HiMail/>
                                <p>whitespace@whitespace.com.tw</p>
                            </a>
                        </li>
                        <li>
                            <FaHome/>
                            <p>台北市羅斯福路十段30號</p>
                        </li>
                    </Contact>
                </Info>
            </Banner>
            <RoomList>{RoomCards}</RoomList>
            </>}
        </>
    )
}

export default Home;