/**
 * Created by jialao on 2016/7/20.
 */
import React from 'react'
import {render} from 'react-dom'
import {Router,browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import routes from './routes'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import './stylesheets/index.css'
import 'react-s-alert/dist/s-alert-default.css'
import configureStore from './store/configureStore'

var store = configureStore(browserHistory);
// var history = syncHistoryWithStore(browserHistory,store);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes()}
        </Router>
    </Provider>
    ,document.getElementById('root')
)
