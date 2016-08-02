/**
 * Created by jialao on 2016/8/2.
 */
import * as types from './types'
import api from '../api'

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
                return dispatch({
                    type:types.DELETE_COMMENT_SUCCESS,
                    id:id
                })
            })
    }
}