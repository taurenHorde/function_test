import { configureStore, createSlice } from '@reduxjs/toolkit'
import moment from 'moment';


let menuStore = createSlice({
    name: 'name',
    initialState: [
        { id: 1, name: '무한 가로 스크롤 (reactWindow) -작업중', link: 'reactWindow' },
        { id: 2, name: '오크는 쓰랄', link: '' },
        { id: 3, name: '타우렌은 바인블러드후프', link: '' },
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
            const isExist = state.origindate.includes(action.payload)
            if (isExist) return;
            if (!isExist) state.origindate.push(action.payload)
            const year = moment(action.payload).format('YYYY');
            const month = moment(action.payload).format('MM');
            const day = moment(action.payload).format('DD');

            if (!state.date[year]) {
                state.date[`${year}`] = { [`${month}`]: [day] }
            } else {
                if (!state.date[year][month]) state.date[year][month] = [day];
                if (!!state.date[year][month]) state.date[year][month].push(day);
            }

            const sortYear = Object.keys(state.date).sort((a, b) => a - b);
            const sortYearData = {}
            sortYear.forEach(year => {

                const sortMonth = Object.keys(state.date[year]).sort((a, b) => parseInt(a) - parseInt(b));
                const sortMonthData = {}

                sortMonth.forEach(month => {
                    sortMonthData[month] = state.date[year][month]
                })

                state.date[year] = sortMonthData
                sortYearData[year] = state.date[year]
            })

            state.date = sortYearData
        }
    }
})


export let { addDate } = dateStore.actions
export default configureStore({
    reducer: {
        menuStore: menuStore.reducer,
        dateStore: dateStore.reducer
    }
}) 