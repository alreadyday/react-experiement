const initialState = 1

export const addAction = () => {
  return {
    type: 'addAge'
  }
}

export const reduceAction = () => {
  return {
    type: 'reduceAge'
  }
}

export function reducer(state = initialState, action) {
  const {type} = action;

  switch(type){
    case 'addAge':
      return state + 1;
    case 'reduceAge':
      return state - 1;
    default:
      return state;
  }
}
