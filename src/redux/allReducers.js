import { combineReducers } from 'redux';
import imagesReducer from '../store/fetchReducers';
import authReducer from './reducers/authReducer';
import songReducer from './reducers/songReducer';

const reducer = combineReducers({
  images: imagesReducer,
  auth: authReducer,
  songs: songReducer,
});

export default reducer;