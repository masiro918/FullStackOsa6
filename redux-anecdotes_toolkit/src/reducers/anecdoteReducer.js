import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      state.push({
        content,
        id: getId(),
        votes: 0
      })
      console.log(state)
    },
    vote(state, action) {
      const id = action.payload
      const oldState = current(state)
      //const anecdoteToChange = current(state).find(n => n.id === id)
      let anecdoteToChange = null;
      oldState.forEach(anecdote => {
        if (anecdote == id) anecdoteToChange = anecdote
      });

      const votedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }

      return current(state).map(anecdote =>
        anecdote !== id ? anecdote : votedAnecdote 
      )     
    }
  },
})

export const { createAnecdote, vote } = anecdoteSlice.actions
export default anecdoteSlice.reducer