import { useDispatch, useSelector } from 'react-redux'
import { vote, createAnecdote, filter } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <div key={anecdote.id}>
    <div>{anecdote.content}</div>
    <div>
        has {anecdote.votes}
        <button onClick={handleVote}>vote</button>
    </div>
    </div>
  )
}

const Anecdotes = () => {
  const addAnecdote = event => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    dispatch(createAnecdote(content))
  }

  const dispatch = useDispatch()
  const anecdotes = useSelector(( { anecdotes } ) => { 
    return anecdotes
  })

  return (
    <div>
      <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
        <Anecdote anecdote={anecdote} handleVote={() => dispatch(vote(anecdote))} />
      ))}
      </div>
      <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <input name="content"/>
          <button type="submit">create</button>
        </form>
      </div>
    </div>
  )
}

export default Anecdotes