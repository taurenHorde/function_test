import { configureStore, createSlice } from '@reduxjs/toolkit'



let menuStore = createSlice({
    name: 'name',
    initialState: [
        { id: 1, name: '무한 가로 스크롤 (reactWindow)', link: 'reactWindow' },
        { id: 2, name: '오크는 쓰랄', link: '' },
        { id: 3, name: '타우렌은 바인블러드후프', link: '' },
    ]
})

export default configureStore({
    reducer: {
        menuStore: menuStore.reducer
    }
}) 