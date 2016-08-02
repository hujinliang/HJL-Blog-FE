/**
 * Created by jialao on 2016/7/20.
 */
import React from 'react'
import {Route,IndexRoute} from 'react-router'
import App from './components/App'
import PersonalPage from './components/PersonalPage'
import Login from './components/Login'
import {adminAuth,redirectToBack,redirectToLogin} from './utiles/authService'
import Setting from './components/Setting'
import Home from './components/Home'
import Article from './components/Article'
import Admin from './components/Admin'
import AdminPage from './components/Admin/AdminPage'
import AdminArticles from './components/Admin/AdminArticles'
import AdminTags from './components/Admin/AdminTags'
import AdminComments from './components/Admin/AdminComments'
import AdminUsers from './components/Admin/AdminUsers'

export default ()=>(
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/personal" component={PersonalPage}/>
        <Route path="/login" component={Login} onEnter={redirectToBack}/>
        <Setting path="/setting" component={Setting} onEnter={redirectToLogin} />
        <Article path="/article/:id" component={Article} />
        <Admin path="/admin" component={Admin} onEnter={adminAuth}>
            <IndexRoute component={AdminPage} />
            <Route path="articles" component={AdminArticles} />
            <Route path="tags" component={AdminTags} />
            <Route path="comments" component={AdminComments} />
            <Route path="users" component={AdminUsers} />
        </Admin>
    </Route>
)