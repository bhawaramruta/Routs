// redux/reducers/main.js
import { combineReducers } from 'redux';
import menureducer from './reducer'; // example reducer

const rootReducer = combineReducers({
  menureducer, // this key is important when using useSelector
});

export default rootReducer;
