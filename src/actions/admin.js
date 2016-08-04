/**
 * Created by jialao on 2016/8/2.
 */
import * as types from './types'
import api from '../api'
import {getTagList} from './article'
import {showMsg} from './other'

export const getAdminComment = () => {
    return {
        type:types.GET_ADMINCOMMENT,
        promise:api.getAdminCommentList()
    }
}

export const deleteComment = (id) => {
    return (dispatch,getState) => {
        return api.deleteComment(id)
            .then(response => ({json:response.data,status:response.statusText}))
            .then(({json,status}) => {
                if(status !== 'OK'){
                    return ;
                }
                dispatch(showMsg('删除标签成功','success'))
                return dispatch({
                    type:types.DELETE_COMMENT_SUCCESS,
                    id:id
                })
            })
    }
}

export const getAdminTagList = () => {
    return {
        type:types.GET_ADMINTAG,
        promise:api.getTagList()
    }
}

export const deleteTag = (id) => {
    return (dispatch,getState) => {
        return api.deleteTag(id)
            .then(response => ({json:response.data,status:response.statusText}))
            .then(({json,status}) => {
                if(status !== 'OK'){
                    return ;
                }
                dispatch(showMsg('删除标签成功','success'))
                dispatch(getTagList())
                return dispatch({
                    type:types.DELETE_ADMINTAG_SUCCESS,
                    id:id
                })
            })
    }
}

export const addTag = (data) => {
    return (dispatch,getState) => {
        return api.addTag(data)
            .then(response => ({json:response.data,status:response.statusText}))
            .then(({json,status}) => {
                if(status !== 'OK'){
                    return ;
                }
                dispatch(showMsg('添加标签成功','success'))
                dispatch(getTagList())
                return dispatch({
                    type:types.ADD_ADMINTAG_SUCCESS,
                    json:json
                })
            })
            .catch(error => {
                return dispatch(showMsg(error.data.error_msg||'添加标签失败'))
            })
    }
}

export const getAdminUserList = () => {
    return {
        type:types.GET_ADMINUSER,
        promise:api.getUserList()
    }
}

export const deleteUser = (id) => {
    return (dispatch,getState) => {
        return api.deleteUser(id)
            .then(response => ({json:response.data,status:response.statusText}))
            .then(({json,status}) => {
                if(status !== 'OK'){
                    return ;
                }
                dispatch(showMsg('删除用户成功','success'))
                return dispatch({
                    type:types.DELETE_ADMINUSER_SUCCESS,
                    id:id
                })
            })
            .catch(error => {
                dispatch(showMsg(error.data.message||'删除用户失败'))
            })
    }
}

export const addUser = (data) => {
    return (dispatch,getState) => {
        return api.addUser(data)
            .then(response => ({json:response.data,status:response.statusText}))
            .then(({json,status}) => {
                if(status !== 'OK'){
                    return ;
                }
                dispatch(showMsg('添加用户成功','success'))
                return dispatch({
                    type:types.ADD_ADMINUSER_SUCCESS,
                    json:json
                })
            })
            .catch(error => {
                dispatch(showMsg(error.data.error_msg||'添加用户失败'))
            })
    }
}