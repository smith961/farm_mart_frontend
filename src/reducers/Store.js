import { configureStore } from '@reduxjs/toolkit'
import TaskReducer from './TaskReducer'

const Store = configureStore({
    reducer: {
        tasks: TaskReducer
    }
})

export default Store