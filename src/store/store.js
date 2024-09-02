import { configureStore, createSlice } from '@reduxjs/toolkit'
import moment from 'moment';


let menuStore = createSlice({
    name: 'name',
    initialState: [
        { id: 1, name: '무한 가로 스크롤 (reactWindow)', link: 'reactWindow' },
        { id: 2, name: 'useMemo를 통한 최적화 - (작업중)', link: '' },
        { id: 3, name: '생각 중', link: '' },
        { id: 4, name: '생각 중', link: '' },
        { id: 5, name: '생각 중', link: '' },
        { id: 6, name: '생각 중', link: '' },
        { id: 7, name: '생각 중', link: '' },
        { id: 8, name: '생각 중', link: '' },
        { id: 9, name: '생각 중', link: '' },
        { id: 10, name: '생각 중', link: '' },
    ]
})

let dateStore = createSlice({
    name: 'date',
    initialState: {
        origindate: [],
        date: {

        },
        select: false
    },
    reducers: {
        addDate(state, action) {
            const isExist = state.origindate.includes(action.payload);
            if (isExist) return;
            if (!isExist) state.origindate.push(action.payload)
            const year = moment(action.payload).format('YYYY');
            const month = moment(action.payload).format('MM');
            const day = moment(action.payload).format('DD');

            if (!state.date[year]) {
                state.date[`${year}`] = { [`${month}`]: [day] }
            } else if (state.date[year]) {
                if (!state.date[year][month]) {
                    state.date[year][month] = [day];
                } else if (state.date[year][month]) {
                    state.date[year][month].push(day);
                }
            }


            const sortYear = Object.keys(state.date).sort((a, b) => a - b);
            const sortYearData = {}
            sortYear.forEach(year => {
                // const sortMonth = Object.keys(state.date[year]).sort((a, b) => parseInt(a) - parseInt(b));
                // const sortMonthData = {}
                // sortMonth.forEach(month => {
                // sortMonthData[month] = state.date[year][month]
                // })
                // state.date[year] = sortMonthData
                // year객체 안 month를 정렬하였지만, 다시 담는 과정에서 정렬이 풀림, 따라서 맵핑할때 강제적으로 순서를 조정할 예정 - 
                // 일단 모르니 안 지우고 있다가, 나중에 수정 할 수 있을 떄 방법을 찾아 수정 할 예정
                sortYearData[year] = state.date[year]
            })
            state.date = sortYearData
            state.date[year][month] = state.date[year][month].sort((a, b) => a - b)
        },
        resetDate(state) {
            state.origindate = [];
            state.date = {};
            state.select = false;
        }
    }
})


export let { addDate, resetDate } = dateStore.actions
export default configureStore({
    reducer: {
        menuStore: menuStore.reducer,
        dateStore: dateStore.reducer
    }
}) 