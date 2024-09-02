import MyList from './MyList';


function R_Step2({ stepFunc }) {

    const stepFunction = stepFunc;

    return (
        <div className='step2'>
            <div className='step-head'>
                <h6>Step_2. 선택한 날짜들을 무한 가로스크롤에서 확인해보세요.</h6>
                <p>*버튼으로 이동 시 7일 단위로 이동</p>
            </div>
            <div className='step-body'>
                <MyList />
            </div>
            <div className='step-footer'>
                <p>ㆍReact-window를 통해 무한 가로달력을 구현.</p>
                <p>ㆍstep1 에서 클릭한 날짜와 맞는 날짜는 아래 파란색 점으로 표기.</p>
                <p>ㆍ가로 달력 내 날짜 클릭하면 자동 가운데 배치 및 파란색 부여.</p>
            </div>
            <div className='step-button'>
                <div className='button-box'>
                    <button
                        onClick={() => stepFunction(-1)}
                    >돌아가기</button>
                    <button
                        onClick={() => stepFunction(1)}
                    >다음으로</button>
                </div>
            </div>
        </div>
    )
}



export default R_Step2