

import './../css/reactWindow.css'


function ReactWindow() {

    return (
        <div className='reactWindow-wrap'>

            <div className='reactWindow-head'>
                <div className='title'>
                    <h4>무한 가로 스크롤 (reactWindow)</h4>
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
                        <h6>1. 날짜를 설정해주세요. (react-Calendar)</h6>
                    </div>
                    <div className='step-body'></div>
                    <div className='step-footer'></div>
                </div>
            </div>

            <div className='reactWindow-footer'></div>
        </div>
    )
}


export default ReactWindow