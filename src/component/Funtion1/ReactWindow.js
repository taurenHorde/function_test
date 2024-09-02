
import { useState } from 'react';
import R_Step1 from './Step1';
import R_Step2 from './Step2';
import R_Step3 from './Step3';
import 'react-calendar/dist/Calendar.css';
import './../../css/reactWindow.css'


function ReactWindow() {
    // moment.locale('ko')

    const [step, setStep] = useState(1);

    const stepFunction = (direction) => {
        // direction 은 number 이고  -1 아니면 1
        if (step === 1 && direction === -1) return;
        if (step === 3 && direction === 1) return;
        setStep(pre => pre + direction);
    }

    return (
        <div className='reactWindow-wrap'>

            <div className='reactWindow-head'>
                <div className='title'>
                    <h4>무한 가로 스크롤 (reactWindow)</h4>
                </div>
                <div className='introduction'>
                    <p>무한 스크롤이 적용되는 달력을 구현, 각 날짜에 맞는 데이터가 있을 시 데이터 바인딩 작업까지 구현해봤습니다.</p>
                </div>
                <div className='characteristic'>
                    <ul>
                        <li>Library : react-Calendar, ★react-Window</li>
                    </ul>
                </div>
            </div>
            <div className='reactWindow-body'>
                {step === 1 && (<R_Step1 stepFunc={stepFunction} />)}
                {step === 2 && (<R_Step2 stepFunc={stepFunction} />)}
                {step === 3 && (<R_Step3 stepFunc={stepFunction} />)}
            </div>

            <div className='reactWindow-footer'>
                <div className='instruction'>

                </div>
            </div>
        </div>
    )
}





export default ReactWindow