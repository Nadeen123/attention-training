const incrementCounter = () => {
  return {
    type: "INCREMENT_COUNTER"
  }
}

const decrementCounter = () => {
  return {
    type: "DECREMENT_COUNTER"
  };
};

const addAnswer = (questionNumber, answer) => {
  return {
    type: "ADD_ANSWER",
    questionNumber,
    answer
  };
};

const addPercent = percent => {
  return {
    type: "ADD_PERCENT",
    percent
  };
};
export { incrementCounter, decrementCounter, addAnswer, addPercent };
