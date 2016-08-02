import { combineReducers } from 'redux';
import csvReducer from './csv_reducer';

const rootReducer = combineReducers({
  data: csvReducer
});

export default rootReducer;
