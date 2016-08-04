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
			dispatch(getUserInfo(json.token));
			dispatch(loginSuccess(json.token));
			dispatch(showMsg('登录成功','success'));
			dispatch(push('/'));
		}).catch(err=>{
			console.log(err)
			return dispatch(showMsg('登录失败'))
		})
	}
}

export function loginSuccess(token){
	return{
		type:types.LOGIN_SUCCESS,
		token:token
	}
}

export const getUserInfo = (token = getCookie('token'))=> {
    return (dispatch,getState) => {
        return api.getMe()
            .then(response => ({json:response.data,status:response.statusText}))
            .then(({json,status}) => {

                let likeList = json.likes;
                let currentArticle = getState().articleDetail.toJS();
                let liked = false;
                likeList.forEach(item => {
                    if(String(item) === currentArticle._id){
                        liked = true;
                    }
                });
                saveCookie('role',json.role);
                dispatch({type:types.TOGGLE_LIKE_EXBUG,liked})

                return dispatch({type:types.GET_USERINFO_SUCCESS,json})
            })
    }
    // return {
    //     type:types.GET_USERINFO,
    //     promise:api.getMe({
    //
    //     })
    // }
};

export function logout(){
    return dispatch => {
        signOut();
        dispatch({type:types.LOGOUT_USER});
        dispatch(push('/'));
        dispatch(showMsg('登出成功','info'));
    }
}

export function updateUser(userInfo){
    return (dispatch,getState) => {
        return api.mdUser(userInfo)
            .then(response => ({json:response.data,status:response.statusText}))
            .then(({json,status}) => {

                if(status !== 'OK'){
                    return dispatch(showMsg(json.data&&json.data.error_msg||'更新失败'))
                }
                dispatch(showMsg('更新成功','success'));
                dispatch(push('/'))
                return dispatch(successUpdateUser(json.data))
            }).catch(err => {
                return dispatch(showMsg(err.data.error_msg||'更新失败'))
            })
    }
}

function successUpdateUser(user) {
    return {
        type: types.UPDATE_USER_SUCCESS,
        user:user
    }
}