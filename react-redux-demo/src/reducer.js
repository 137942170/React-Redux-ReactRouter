import { combineReducers } from 'redux'
import { login } from './login.redux'
import { counter } from './index.redux'
export default combineReducers({ login, counter })