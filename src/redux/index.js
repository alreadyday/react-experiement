import {reducer as countReducer} from './count';
import {reducer as ageReducer} from './age';
import { combineReducers } from 'redux'

export const reducer = combineReducers({
  count: countReducer,
  age: ageReducer
})
