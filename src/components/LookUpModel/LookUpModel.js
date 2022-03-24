import React, {useState, useEffect, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';
import { Overlay, Model, ContentWrapper,TitleWrapper,Title,TableWrapper,TableHead,TableRow,TableData,ModelText, ButtonRow,Button } from './style';
import { showScroll } from "../../functions/functions";
import Spinner from '../Spinner/Spinner';
import Divider from '../Divider/Divider';
import { FaTrash } from "react-icons/fa";
import '../../style/style.css';

const LookUpModel = (props) => {
    const {id, setShowLookUpModel} = props;
    const token='1ujOhhjO8doC3146McKZPgkJqoEc7EdCPX1mbZj9MxFzJynuQoKtMOLFCYdX';
    const nodeRef = useRef();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showClearModel, setShowClearModel] = useState(false);
    const [clearCheck, setClearCheck] = useState(false);
    const [clearDone, setClearDone] = useState(false);
    const [fade, setFade] = useState(false);
    useEffect(() => {
        setFade(true);
        showScroll(false);
    },[])
    useEffect(() => {
        const url = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`;
        fetch(url,{
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
        }).then((data) => {
            setData(data.booking);
            setLoading(false);
         }).catch((error) => {
            console.log('request failed', error);
            alert('error');
        })
    },[id]);
    const ClearReserve = () => {
        const url = `https://challenge.thef2e.com/api/thef2e2019/stage6/rooms`;
        fetch(url, {
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            } else {
                var error = new Error(response.statusText)
                error.response = response
                throw error
            }
        }).then(data => {
            setClearDone(true);
         }).catch(function(error) {
            alert('error');
            console.log('request failed', error);
        });
    }
    const handleClearClick = () => {
        setClearCheck(true);
        ClearReserve();
    }
    const handleCloseClick = () => {
        setFade(false);
        setTimeout(() => {
            setShowLookUpModel(false);
            showScroll(true);
        }, 100);
    }
    const RecordModel = () => {
        return(
            <>
            <TitleWrapper>
                <Title>預約紀錄</Title>
                <button onClick={() => setShowClearModel(true) }><FaTrash/></button>
            </TitleWrapper>
            <Divider/>
            {loading ?  <Spinner/> :
                ( data.length ? <Table data={data} /> : <ModelText>無預約紀錄</ModelText> )
            }
            <ButtonRow>
                <Button onClick={handleCloseClick}>確定</Button>
            </ButtonRow>
            </>
        )
    }
    const ClearModel = () => {
        return(
            <>
            {clearCheck ? <DoneModel/> :
                <>
                <Title>確認清除</Title>
                <Divider/>
                <ModelText>確定清除所有預約紀錄?</ModelText>
                <ButtonRow style={{'justifyContent': 'space-between'}} >
                    <Button onClick={handleCloseClick}
                    style={{color: '#6D7278',background:'#D8D8D8'}}>取消</Button>
                    <Button onClick={handleClearClick}>確定</Button>
                </ButtonRow>
                </>
            }</>
        )
    }
    const DoneModel = () => {
        return(
            <>
            { !clearDone? <Spinner/> :
                <>
                    <Title>清除成功</Title>
                    <Divider/>
                    <ModelText>已成功清除所有訂房紀錄</ModelText>
                    <ButtonRow>
                        <Button onClick={handleCloseClick}>確定</Button>
                    </ButtonRow>
                </>
            }
            </>
        )
    }
    return(
        <CSSTransition nodeRef={nodeRef} in={fade} timeout={300} classNames="fade" >
        <Overlay ref={nodeRef} onClick={handleCloseClick} >
            <Model>
                <ContentWrapper onClick={((e) => e.stopPropagation())}>
                    {showClearModel ? <ClearModel/> : <RecordModel />}
                </ContentWrapper>
            </Model>
        </Overlay>
        </CSSTransition>
    )
}

export default LookUpModel;


const Table = (props) => {
    const {data} = props;
    const TableContent = data.map((item, index) => {
        return(
            <TableRow key={index}>
                <TableData>{item.date}</TableData>
                <TableData>{item.name}</TableData>
            </TableRow>
        )
    })
    return(
        <TableWrapper>
            <tbody>
                <TableRow>
                    <TableHead>預約時間</TableHead>
                    <TableHead>預約人</TableHead>
                </TableRow>
                {TableContent}
            </tbody>
        </TableWrapper>
    )
}