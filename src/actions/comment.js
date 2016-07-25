/**
 * Created by jialao on 2016/7/25.
 */
import * as types from './types'
import api from '../api'
import {showMsg} from './other'
import {commentsNumberAdd} from './article'

export const getCommentList = (id) => {
    return {
        type:types.COMMENT_LIST,
        promise:api.getCommentList(id)
    }
};

export function addComment(comment){
    return (dispatch,getState) => {
        return api.addNewComment(comment)
            .then(response => ({json:response.data,status:response.statusText}))
            .then(({json,status}) => {
                if(status !== 'OK'){
                    return dispatch(showMsg(json.data.error_msg) || '添加评论失败')
                }
               
                dispatch(showMsg('添加评论成功','success'));
                dispatch(commentsNumberAdd());
                return dispatch(receiveAddComment(json.data))
            }).catch(e => {
                return dispatch(showMsg('添加评论失败'))
            })

    }
}

function receiveAddComment(comment){
    return {
        type:types.ADD_COMMENT_SUCCESS,
        comment:comment
    }
}