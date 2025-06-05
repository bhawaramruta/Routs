import { createStore } from 'redux';
import rootReducer from './redux/reducers/main'; // make sure the path and file name are correct

const store = createStore(rootReducer);

export default store;

