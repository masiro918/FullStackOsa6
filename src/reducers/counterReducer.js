const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  let new_state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'GOOD':
      new_state.good++
      return new_state
    case 'OK':
      new_state.ok++
      return new_state
    case 'BAD':
      new_state.bad++
      return new_state
    case 'RESET':
      new_state = JSON.parse(JSON.stringify(initialState))
      return new_state
    default:
      return state
  }
}

export default counterReducer
