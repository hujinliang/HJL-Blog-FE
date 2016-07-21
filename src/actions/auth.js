/**
 * Created by jialao on 2016/7/21.
 */
import * as types from './types'
import {push} from 'react-router-redux'
import {saveCookie,getCookie,signOut} from '../utiles/authService'
import {showMsg} from './other'
import api from '../api'
import {API_ROOT} from '../config'

export const getSnsLogins = ()=>{
    return {
        type:types.GET_SNSLOGINS,
        promise:api.getSnsLogins()
    }
};