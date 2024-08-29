import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDate } from '../store/store';
import Calendar from 'react-calendar';
import moment, { locale } from 'moment';
import 'react-calendar/dist/Calendar.css';
import './../css/reactWindow.css'


function ReactWindow() {
    // moment.locale('ko')

    const dispatch = useDispatch()
    const today = moment(new Date());
    const selectDate = useSelector((state) => state.dateStore)
    const [value, onChange] = useState(today);

    return (
        <div className='reactWindow-wrap'>

            <div className='reactWindow-head'>
                <div className='title'>
                    <h4
                        onClick={() => console.log(selectDate)}
                    >무한 가로 스크롤 (reactWindow)</h4>
                </div>
                <div className='Description'>
                    <p>무한 스크롤이 적용되는 달력을 구현, 각 날짜에 맞는 데이터가 있을 시 데이터 바인딩 작업까지 구현해봤습니다.</p>
                </div>
                <div className='characteristic'>
                    <ul>
                        <li>Library : react-Calendar, ★react-Window</li>
                    </ul>
                </div>
            </div>

            <div className='reactWindow-body'>
                <div className='step'>
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
                        <p>* 선택 한 날짜</p>
                        <div className='select-wrap'>
                            <table border={1}>
                                <tbody>
                                    {Object.keys(selectDate.date).map((year) => (
                                        <tr key={year}>
                                            <th>{year}</th>
                                            <th>
                                                {Object.keys(selectDate.date[year]).map((month) => (
                                                    <p key={month}>{month}</p>
                                                ))}
                                            </th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className='reactWindow-footer'></div>
        </div>
    )
}


export default ReactWindow