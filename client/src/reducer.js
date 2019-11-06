const initialState = {
  counter: 1,
  score: [],
  percent: 0,
  flag: 0 // this state is defined to refresh the page
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "DECREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter - 1
      }
    case "ADD_ANSWER":
      if (action.questionNumber > state.score.length) {
        return {
          ...state,
          score: state.score.concat([action.answer])
        }
      } else {
        return {
          ...state,
          score: state.score.map((answer, questionNumber) => {
            return questionNumber + 1 === action.questionNumber ? action.answer : answer
          })
        }
      }
    case "ADD_PERCENT":
      return {
        ...state,
        percent: action.percent
      }
    case "REFRESH_FLAG":
      return {
        ...state,
        flag: !state.flag
      }

    default:
      return state
  }
}

export default reducer
