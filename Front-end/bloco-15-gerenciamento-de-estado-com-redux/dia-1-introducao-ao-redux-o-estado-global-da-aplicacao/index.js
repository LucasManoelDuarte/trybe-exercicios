import Redux from 'redux';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE) => {
  return state;
}

const store = Redux.createStore(reducer);
