export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        value: state.value + 1,
      };

    case REMOVE_ONE:
      return {
        ...state,
        value: state.value - 1,
      };

    case CLEAR_TALLY:
      return {
        ...state,
        value: 0,
      };

    default:
      return state;
  }
}
