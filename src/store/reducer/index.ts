import {
  combineReducers
} from 'redux';
import homeReducer from './home/index'
const reducers = {
  homeReducer
}
// 通过combineReducers把多个reducer进行合并
const rootReducers = combineReducers(reducers)

export default rootReducers;