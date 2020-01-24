import {combineReducers} from 'redux'
import inputDateReducer from './inputDateReducer.js'

export default combineReducers(
  {
    inputDate: inputDateReducer,
  }
)
