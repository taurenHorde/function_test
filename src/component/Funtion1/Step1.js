
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDate, resetDate } from '../../store/store';
import Calendar from 'react-calendar';
import moment from 'moment';
import styled from 'styled-components'



function R_Step1({ stepFunc }) {

    const stepFunction = stepFunc;
    const dispatch = useDispatch()
    const today = moment(new Date());
    const selectDate = useSelector((state) => state.dateStore)
    const [value, onChange] = useState(today);


    return (
        <div className='step1'>
            <div className='step-head'>
                <h6>Step_1. 데이터에 저장 될 날짜를 설정</h6>
            </div>
            <div className='step-body'>
                <div className='calendar-wrap'>
                    <Calendar
                        formatDay={(locale, date) => moment(date).format('D')}
                        onChange={onChange}
                        value={value}
                        minDetail="year"
                        showNeighboringMonth={false}
                        onClickDay={(val, e) => {
                            const formatChange = moment(val).format('YYYY-MM-DD')
                            dispatch(addDate(formatChange))
                        }}
                    />
                </div>
            </div>
            <div className='step-footer'>
                <p
                onClick={()=>console.log(selectDate)}
                >* 선택 한 날짜</p>
                <div className='select-wrap'>
                    {Object.keys(selectDate.date).map((year) => {
                        const monthInThisYear = Object.keys(selectDate.date[year])
                        return (
                            <div
                                className='select-box'
                                key={year}
                            >
                                <div
                                    className='select-year'>
                                    <p> {year}</p>
                                </div>
                                <div
                                    className='select-months-box'>
                                    {['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map((month) => {
                                        if (monthInThisYear.includes(month)) {
                                            return (
                                                <div
                                                    className='select-month-box'
                                                    key={month}
                                                >
                                                    <div className='select-month'>
                                                        <p>{month}</p>
                                                    </div>
                                                    <div className='select-day'>
                                                        {selectDate.date[year][month]
                                                            .map((day) => (
                                                                <p key={day}>{day}</p>
                                                            ))}
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return;
                                        }
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='step-button'>
                <div className='button-text'>
                    <p>*  날짜 선택 과정을 다 진행 하셨다면 아래 버튼을 클릭해 주세요.</p>
                </div>
                <div className='button-box'>
                    <StepBut
                        $sel={selectDate.origindate.length}
                        onClick={() => {
                            if (selectDate.origindate.length > 0) return stepFunction(1);
                        }}
                    >선택완료({selectDate.origindate.length})</StepBut>
                    <button className='button-reset'
                        onClick={() => dispatch(resetDate())}
                    >리셋</button>
                </div>
            </div>
        </div>
    )
}


const StepBut = styled.button`
    width: 70%;
    padding: 5px;
    box-sizing: border-box;
    user-select:none;
    font-size:0.8rem;
    border:none;
    background:rgb(240,240,240);
    cursor:${props => props.$sel > 0 ? "pointer" : "normal"};
    color:${props => props.$sel > 0 ? "black" : "gray"};
`


export default R_Step1