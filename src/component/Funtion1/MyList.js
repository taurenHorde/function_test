
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import moment from 'moment';
import 'moment/locale/ko';


const today = moment(new Date());
const loadDateData = async (criteria, length, direction) => {
    // criteria 불러올 기준 date // length 얼마나 불러올 껀지 // direction 불러올 방향;
    const returnData = []
    const startPoint = direction === 2 ? 0 : -length;
    const endPoint = direction === 1 ? 0 : length;

    for (var i = startPoint; i <= endPoint; i++) {
        returnData.push(moment(criteria).add(i, 'days'))
    }
    return returnData
}


const Tile = ({ index, style, data, onClick, chooseIndex, selectDate }) => {
    const indexDate = moment(data[index]);
    const d = indexDate.format('dd')
    const dd = indexDate.format('DD')
    const todayCheck = today.isSame(indexDate, 'day')
    const chooseCheck = chooseIndex === index
    const selectCheck = selectDate.origindate.includes(indexDate.format('YYYY-MM-DD'))
    return (
        <div
            style={{
                ...style,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                userSelect: 'none',
                cursor: 'pointer'
            }}
            onClick={() => onClick(index)}
        >
            <p style={{
                color: chooseCheck ? 'blue' : 'black',
                fontWeight: chooseCheck ? 'bold' : 'normal'
            }}>
                {todayCheck ? '오늘' : d} <br />
                {dd}
            </p>
            <div
                style={{
                    display: selectCheck ? 'block' : 'none',
                    width: '5px',
                    height: '5px',
                    marginTop: '5px',
                    borderRadius: '5px',
                    background: 'blue'
                }}
            />
        </div>
    )
};



function MyList() {

    const selectDate = useSelector((state) => state.dateStore)
    const [dataLoading, setDataLoading] = useState(false)
    const [addLoading, setAddLoading] = useState(true)
    const [dateData, setDateData] = useState()
    const [chooseDate, setChooseDate] = useState(20)
    const [center, setCenter] = useState(0);
    const listRef = useRef(null);

    useEffect(() => {
        const mountLoad = async () => {
            const mountData = await loadDateData(today, 20, 0)
            setDateData(mountData);
            setDataLoading(true);
        }
        mountLoad()
    }, [])



    useEffect(() => {
        if (!listRef.current) return
        listRef.current.scrollToItem(chooseDate, 'center');
    }, [chooseDate])


    const listBut = (type) => {
        if (!listRef.current) return;
        listRef.current.scrollToItem(center + type, 'center');
    }

    const clickTile = (index) => setChooseDate(index)

    const handleTile = ({
        visibleStartIndex,
        visibleStopIndex,
    }) => {
        setCenter(Math.round((visibleStartIndex + visibleStopIndex) / 2))
        if (visibleStartIndex < 10) {
            if (!addLoading) return;
            const addDate = async () => {
                setAddLoading(false)
                const newData = await loadDateData(dateData[0], 50, 1)
                setDateData(pre => [...newData, ...pre])
                if (listRef.current) {
                    listRef.current.scrollTo(listRef.current.state.scrollOffset + newData.length * 44.44444444);
                }
                setAddLoading(true);
            }
            addDate();
        }
        if ((dateData.length - 10) < visibleStopIndex) {
            const lastLength = dateData.length - 1
            if (!addLoading) return;
            const addDate = async () => {
                setAddLoading(false)
                const newData = await loadDateData(dateData[lastLength], 50, 2)
                setDateData(pre => [...pre, ...newData])
                setAddLoading(true);
            }
            addDate();
        }
    }

    return (
        <AutoSizer>
            {({ height, width }) => {
                const division9 = width / 9
                if (!dataLoading) return;
                return (
                    <div
                        className='list-wrap'
                        style={{
                            width: width,
                            height: height
                        }}
                    >
                        <div
                            style={{
                                width: division9,
                                height: height,
                            }}
                            className='list-but'
                            onClick={() => listBut(-7)}
                        >
                            <p>⬅️</p>
                        </div>
                        <List
                            className='no-scroll'
                            height={height}
                            itemCount={dateData?.length}
                            itemSize={division9}
                            width={division9 * 7}
                            layout='horizontal'
                            onItemsRendered={handleTile}
                            ref={listRef}
                            initialScrollOffset={(20 - 3) * division9}
                        >
                            {({ index, style }) => (
                                <Tile
                                    index={index}
                                    style={style}
                                    data={dateData}
                                    onClick={clickTile}
                                    chooseIndex={chooseDate}
                                    selectDate={selectDate}
                                />
                            )}

                        </List>
                        <div
                            style={{
                                width: division9,
                                height: height
                            }}
                            className='list-but'
                            onClick={() => listBut(7)}
                        >
                            <p>➡️</p>
                        </div>
                    </div>
                )
            }
            }
        </AutoSizer>

    )
}


export default MyList