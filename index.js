// Declares the Initial State
const initialState = {
  // Initial data
  value: 0,
};

// Action types
const ADD_ONE = "ADD_ONE";
const REMOVE_ONE = "REMOVE_ONE";
const CLEAR_TALLY = "CLEAR_TALLY";

// function to handle our actions, and update the state accordingly
function reducer(state = initialState, action) {
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

// listeners listen for state changes
function createStore(reducer) {
  let currentState = initialState;
  let listeners = [];

  return {
    // logs the currentState as a number
    getState: () => currentState.value,
    dispatch: (action) => {
      currentState = reducer(currentState, action); // function to update the state
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener) => {
      listeners.push(listener);
      return () => {
        // removing the listener when we want to unsubscribe from a particular thing/listener
        listeners = listeners.filter((list) => list !== listener);
      };
    },
  };
}

const store = createStore(reducer);
// console.log state upon change via subscribing
store.subscribe(() => {
  console.log(store.getState());
});
console.log(store.getState());

store.dispatch({ type: ADD_ONE });

store.dispatch({ type: ADD_ONE });

store.dispatch({ type: REMOVE_ONE });

store.dispatch({ type: CLEAR_TALLY });
