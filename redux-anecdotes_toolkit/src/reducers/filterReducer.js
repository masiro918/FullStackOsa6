import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterAnecdotes(state, action) {
      console.log("here")
      return null;
    }
  },
})

export const { filterAnecdotes } = filterSlice.actions
export default filterSlice.reducer