import { useSelector } from 'react-redux'
import './../css/menu.css'
import { useNavigate } from 'react-router-dom'

function Menu() {

    const navigate = useNavigate()
    const menuData = useSelector((state) => state.menuStore)

    return (
        <div className='menu-wrap'>
            <div className='menu-head'>
                {/* Title */}
                <h4>& - ! 테스트 ! - &</h4>
            </div>
            <div className='menu-body'>
                <div className='menu-item-wrap'>
                    {menuData?.map((val, idx) => {
                        return (
                            <div
                                className='menu-item'
                                key={idx}
                                onClick={() => navigate(`/${val.link}`)}
                            >
                                <p>{val.id}.{val.name}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
            <div className='menu-footer'>

            </div>
        </div>
    )
}


export default Menu