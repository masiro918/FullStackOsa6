
import reducer from './reducers/anecdoteReducer'
import filterReducer from '/reducers/filterReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    anecdotes: reducer,
    filter: filterReducer 
  }
})

export default store