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

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'NEW_ANECDOTE': return [...newState, action.payload]
    case 'VOTE': {
      const id = action.payload.id.id
      const anecdoteToChange = newState.find(n => n.id === id)
      
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      
      console.log(action.payload.id)
      return newState.map(anecdote => (anecdote.id !== id ? anecdote : changedAnecdote))
    }

    default: return newState
  }
}

export const createAnecdote = aneContent => {
  return {
    type: 'NEW_ANECDOTE',
    payload: {
      content: aneContent,
      id: getId(),
      votes: 0
    }
  }
}

const checkId = (id1, id2) => {
  return id1 == id2
}

export const vote = id => {
  return {
    type: 'VOTE',
    payload: {id}
  }
}

export default reducer
