/**
 * Created by jialao on 2016/7/20.
 */
import React from 'react'
import {Route,IndexRoute} from 'react-router'
import App from './components/App'
import PersonalPage from './components/PersonalPage'
import Login from './components/Login'
import {redirectToBack,redirectToLogin} from './utiles/authService'
import Setting from './components/Setting'
import Home from './components/Home'

export default ()=>(
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/personal" component={PersonalPage}/>
        <Route path="/login" component={Login} onEnter={redirectToBack}/>
        <Setting path="/setting" component={Setting} onEnter={redirectToLogin} />
    </Route>
)