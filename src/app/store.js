import { configureStore } from '@reduxjs/toolkit'
import TaskReducer from './TaskReducer'

const store = configureStore({
    reducer: {
        tasks: TaskReducer
    }
})

export default store