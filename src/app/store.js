import { configureStore } from '@reduxjs/toolkit'
import TaskReducer from '../reducers/TaskReducer'

const store = configureStore({
    reducer: {
        tasks: TaskReducer
    }
})

export default store