function reducer(state = 1, action) {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return state + 1;
    case "DECREMENT_COUNTER":
      return state - 1;
    default:
      return state;
  }
}

export default reducer;
