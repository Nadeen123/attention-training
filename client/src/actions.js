const incrementCounter = () => {
  return {
    type: "INCREMENT_COUNTER"
  }
}

const decrementCounter = () => {
  return {
    type: "DECREMENT_COUNTER"
  }
}

const addAnswer = (questionNumber, answer) => {
  return {
    type: "ADD_ANSWER",
    questionNumber,
    answer
  }
}

const addPercent = percent => {
  return {
    type: "ADD_PERCENT",
    percent
  }
}
const refreshFlag = () => {
  return {
    type: "REFRESH_FLAG"
  }
}
const totalScore = (inattentionScore, hyperactivityScore, totalScore) => {
  return {
    type: "TOTAL_SCORE",
    inattentionScore,
    hyperactivityScore,
    totalScore
  }
}
const setIsCompleted = isCompleted => {
  return {
    type: "IS_COMPLETED",
    isCompleted
  }
}
const restart = () => {
  return {
    type: "RESTART"
  }
}
export { incrementCounter, decrementCounter, addAnswer, addPercent, refreshFlag, totalScore, setIsCompleted, restart }
