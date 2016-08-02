import {CSV_PARSED} from '../actions/types'

export default function(state=[{json:"123"}], action) {
  switch(action.type){
    case CSV_PARSED:
      return { ...state, json:action.payload}
  }

  return state;
}
