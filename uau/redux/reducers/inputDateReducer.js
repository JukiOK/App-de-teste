import {NIVER_DATE} from '../actions/inputDateActions.js'

export default(state={}, action) => {
  switch (action.type) {
    case NIVER_DATE:
    console.log(action.date);
      return(Object.assign({}, state, {
        niverDate: action.date,
      }))
      break;
    default:
      return state;
  }
}
