function reducer(state = 0, action) {
  switch (action.type) {
    case "ADD_PERCENT":
      return action.percent;
    default:
      return state;
  }
}

export default reducer;
