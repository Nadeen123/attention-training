const initialState = {
  counter: 1,
  score: localStorage.getItem("score") ? localStorage.getItem("score") : [],
  percent: 0,
  question: "",
  inattentionScore: localStorage.getItem("inattentionScore") || 0,
  hyperactivityScore: localStorage.getItem("hyperactivityScore") || 0,
  totalScore: localStorage.getItem("totalScore") || 0,
  flag: 0, // this state is defined to refresh the page
  isCompleted: localStorage.getItem("complete") || false
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
        console.log(state.score, "99999999")

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
    case "TOTAL_SCORE":
      return {
        ...state,
        inattentionScore: action.inattentionScore,
        hyperactivityScore: action.hyperactivityScore,
        totalScore: action.totalScore
      }
    case "IS_COMPLETED":
      return {
        ...state,
        isCompleted: action.isCompleted
      }
    case "RESTART":
      return {
        ...state,
        inattentionScore: 0,
        hyperactivityScore: 0,
        totalScore: 0,
        isCompleted: false,
        score: []
      }
    default:
      return state
  }
}

export default reducer
