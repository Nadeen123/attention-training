function reducer(state = 1, action) {
  switch (action.type) {
    case "INCREMENT_INSTRUCTIONS_COUNTER":
      return (state % 4) + 1;
    case "DECREMENT_INSTRUCTIONS_COUNTER":
      return state - 1;
    default:
      return state;
  }
}

export default reducer;
