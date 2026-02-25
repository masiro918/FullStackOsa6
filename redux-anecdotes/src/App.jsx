import { useSelector, useDispatch } from 'react-redux'
import { vote, createAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  const addAnecdote = event => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    dispatch(createAnecdote(content))
  }

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
    return (
      <div>
      {anecdotes.map(anecdote => (
        <Anecdote anecdote={anecdote} handleVote={() => dispatch(vote(anecdote))} />
      ))}
      </div>
    )
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes />
      <h2>create new</h2>
      <div>
        <form onSubmit={addAnecdote}>
          <input name="content"/>
          <button type="submit">create</button>
        </form>
      </div>
    </div>
  )
}

export default App
