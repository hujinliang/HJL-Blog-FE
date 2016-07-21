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

export function localLogin(userInfo){
	return (dispatch,getState) => {
		return api.localLogin(userInfo)
		.then(response => ({json:response.data,status:response.statusText}))
		.then(({json,status}) => {

			if(status != 'OK'){
				return dispatch(showMsg(json.data.error_msg||'登录失败'));
			}

			saveCookie('token',json.token);
			// dispatch(getUserInfo(json.token));
			dispatch(loginSuccess(json.token));
			dispatch(showMsg('登录成功','success'));
			dispatch('/');
		}).catch(err=>{
			
			return dispatch(showMsg('登录失败'))
		})
	}
}

function loginSuccess(token){
	return{
		type:types.LOGIN_SUCCESS,
		token:token
	}
}