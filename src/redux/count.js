const initialState = 1

export const addAction = () => {
  return {
    type: 'addCount'
  }
}

export const reduceAction = () => {
  return {
    type: 'reduceCount'
  }
}

export function reducer(state = initialState, action) {
  const {type} = action;

  switch(type){
    case 'addCount':
      return state + 1;
    case 'reduceCount':
      return state - 1;
    default:
      return state;
  }
}
