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
                dispatch(showMsg('删除标签成功','success'))
                dispatch(getTagList())
                return dispatch({
                    type:types.ADD_ADMINTAG_SUCCESS,
                    json:json
                })
            })
    }
}