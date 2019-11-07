const initialState = {
  score: [],
  isCompleted: localStorage.getItem("complete") || false,
  totalScore: localStorage.getItem("score") ? localStorage.getItem("score").split(",") : [],
  inattentionScore: localStorage.getItem("inattentionScore") || 0,
  hyperactivityScore: localStorage.getItem("hyperactivityScore") || 0,
  totalScore: localStorage.getItem("totalScore") || 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ANSWER":
      if (action.questionNumber > state.score.length) {
        return {
          ...state,
          score: state.score.concat([action.answer])
        };
      } else {
        return {
          ...state,
          score: state.score.map((answer, questionNumber) => {
            return questionNumber + 1 === action.questionNumber ? action.answer : answer;
          })
        };
      }
    case "IS_COMPLETED":
      return {
        ...state,
        isCompleted: action.isCompleted
      };

    case "RESTART":
      return {
        inattentionScore: 0,
        hyperactivityScore: 0,
        totalScore: 0,
        isCompleted: false,
        score: []
      };
    case "TOTAL_SCORE":
      return {
        ...state,
        inattentionScore: action.inattentionScore,
        hyperactivityScore: action.hyperactivityScore,
        totalScore: action.totalScore
      };
    default:
      return state;
  }
}
export default reducer;
