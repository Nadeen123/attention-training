function reducer(state = 0, action) {
  switch (action.type) {
    case "REFRESH_FLAG":
      return !state;
    default:
      return state;
  }
}

export default reducer;
