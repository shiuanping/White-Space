import React,{useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths,getMonth,getYear } from 'date-fns';
import { HiOutlineChevronLeft,HiOutlineChevronRight } from "react-icons/hi";
import { addDays } from 'date-fns';

import { PickerHeader,PickerHeaderTitle,MonthButton } from './style';


const RangeDatePicker = (props) => {
  const {setReserveStart,setReserveEnd} = props;
  const [startDate, setStartDate] = useState(addDays(new Date(), 1));
  const [endDate, setEndDate] = useState(addDays(new Date(), 2));
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setReserveStart(start);
    setEndDate(end);
    setReserveEnd(end);
  };
  const setDayName = (name) => {
    if(name === 'Sunday') return '日';
    else if(name === 'Monday') return '一';
    else if(name === 'Tuesday') return '二';
    else if(name === 'Wednesday') return '三';
    else if(name === 'Thursday') return '四';
    else if(name === 'Friday') return '五';
    else if(name === 'Saturday') return '六';
  }
  return (
    <DatePicker
      selected={startDate}
      onChange={(dates)=> onChange(dates)}
      startDate={startDate}
      endDate={endDate}
      minDate={addDays(new Date(), 1)}
      maxDate={addDays(addMonths(new Date(), 3), -1)}
      renderCustomHeader={(props)=> <DatePickerHeader props={props}  /> }
      formatWeekDay={nameOfDay => setDayName(nameOfDay) }
      selectsRange
      selectsDisabledDaysInRange
      inline
    />
  );
}

export default RangeDatePicker;


const DatePickerHeader = (props) => {
  const {date,decreaseMonth,increaseMonth,prevMonthButtonDisabled,
    nextMonthButtonDisabled} = props.props;
  return (
    <PickerHeader>
      <MonthButton onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        <HiOutlineChevronLeft />
      </MonthButton>
      <PickerHeaderTitle>{getYear(date)} / {getMonth(date)+1}</PickerHeaderTitle>

      <MonthButton onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        <HiOutlineChevronRight/>
      </MonthButton>
    </PickerHeader>
  )
}
