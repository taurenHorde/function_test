import { useNavigate } from 'react-router-dom'

function R_Step3({ stepFunc }) {
    const navigate = useNavigate()
    const stepFunction = stepFunc;

    return (
        <div className='step3'>
            <div className='step-head'>
                <h6>Step_3. 기능 활용 범위.</h6>
            </div>
            <div className='step-body'>
                <h5>사용하기 좋을 때_</h5>
                <p>ㆍ짧은 기간 내 이용자에게 날짜에 맞게 데이터를 노출하고 싶을 때.</p>
                <p>ㆍ데이터 종류에 따라 각기 다른 스타일로 노출 하고 싶을 때.</p>
                <p>ㆍ시간 제약이 있는 데이터를 알리고 싶을 때. (리뷰작성기간 제약이 있는 주문내역 등)</p>
            </div>
            <div className='step-footer'>
                <h5>그 외 생각</h5>
                <p>ㆍ이전 까지 나는 이용자에게 날짜에 맞게 데이터를 보여줄 때는 react-calendar를 통해 달력 UI에 맞게 구현했었음. 참고(포트폴리오5_야구다이어리 / 포트폴리오6_야구팀구하기)</p>
                <p>ㆍ과제평가로 위와 비슷한 기능을 구현 해본적이 있었슴, 그 때는 라이브러리를 사용하지 않고 구현을 하였으며, 해당 날짜에 맞는 데이터가 있을 시 그 날짜에 맞는 글을 작성하고 삭제 하는 것 까지 구현하였음.</p>
            </div>
            <div className='step-button'>
                <div className='button-box'>
                    <button
                        onClick={() => stepFunction(-1)}
                    >돌아가기</button>
                    <button
                        onClick={() => navigate('/menu')}
                    >메뉴로</button>
                </div>
            </div>
        </div>
    )
}



export default R_Step3