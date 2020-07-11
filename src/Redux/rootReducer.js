import { combineReducers } from 'redux';
import cakeReducer from './Cake/CakeReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  // others
});

export default rootReducer;
