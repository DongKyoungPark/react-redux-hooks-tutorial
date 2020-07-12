import { combineReducers } from 'redux';
import cakeReducer from './Reducers/CakeReducer';
import iceCreamReducer from './Reducers/IceCreamReducer';
import userReducer from './Reducers/UserReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
  // others
});

export default rootReducer;
