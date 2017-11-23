/**
 * 定义路由
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducer'
import { Provider } from 'react-redux';
import Login from './Login'
import DashBoard from './DashBoard'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
/**
 * 获取所有store中的数据
 */
const store = createStore(reducers, applyMiddleware(thunk))
ReactDOM.render(
    ( 
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/dashboard' component={DashBoard}></Route>
                    <Redirect to='/dashboard'></Redirect>
                </Switch>
            </BrowserRouter>
        </Provider >
    ),
document.getElementById('root'))
