/**
 * Created by jialao on 2016/7/20.
 */
import {combineReducers} from 'redux'
import apps from './apps'
import {reducer as formReducer} from 'redux-form'
import {routerReducer} from 'react-router-redux'
import globalVal from './globalVal'
import showmsg from './showmsg'
import auth from './auth'
import sns from './sns'
import tagList from './tagList'

const rootReducer = combineReducers({
    apps,
    form:formReducer,
    routing:routerReducer,
    globalVal:globalVal,
    showmsg,
    auth,
    sns,
    tagList
})

export default rootReducer
