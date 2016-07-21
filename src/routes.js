/**
 * Created by jialao on 2016/7/20.
 */
import React from 'react'
import {Route,IndexRoute} from 'react-router'
import App from './components/App'
import PersonalPage from './components/PersonalPage'
import Login from './components/Login'

export default ()=>(
    <Route path="/" component={App}>
        <Route path="/personal" component={PersonalPage}/>
        <Route path="/login" component={Login}/>
    </Route>
)