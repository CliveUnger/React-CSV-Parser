import {CSV_PARSED} from '../actions/types'

export default function(state="", action) {
  switch(action.type){
    case CSV_PARSED:
      var str = JSON.stringify(action.payload, null, 4);
      return { ...state, json:str}
  }

  return state;
}
