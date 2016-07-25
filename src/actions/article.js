/**
 * Created by lenovo on 2016/7/22.
 */
import * as types from './types'
import api from '../api'
import {getUserInfo} from './auth'

export const getTagList = () => {
    return {
        type:types.TAG_LIST,
        promise:api.getTagList()
    }
};

export const changeOptions = (option) => {
    return {
        type:types.CHANGE_OPTIONS,
        option:option
    }
};

export const getArticleList = (isAdd) => {
    return (dispatch,getState) => {
        const options = getState().options.toJS();
        return dispatch({
            type:types.ARTICLE_LIST,
            isAdd:isAdd,
            itemsPerPage:options.itemsPerPage,
            promise:api.getArticleList(options)
        })
    }
};

export const getArticleDetail = (id) => {
    return (dispatch,getState) => {
        const auth = getState().auth.toJS();
        return api.getArticleDetaile(id)
            .then(response => ({json:response.data,status:response.statusText}))
            .then(({json,status}) => {

                let isLike = false;
                let article = json.data;
                console.log(auth)
                if(auth.user){
                    auth.user.likes.forEach(item => {
                        if(item.toString() === article._id){
                            isLike =true
                        }
                    })
                }
                return dispatch({
                    type:types.ARTICLE_DETAIL_SUCCESS,
                    articleDetail:{...article,isLike}
                })
            })
            .catch(error => {
                return dispatch({
                    type:types.ARTICLE_DETAIL_FAILURE
                })
            })
    }
};

export function toggleLike(aid){
    return (dispatch,getState) => {
        return api.toggleLike(aid)
            .then(response => ({json:response.data,status:response.statusText}))
            .then(({json,status}) => {
              
                if(status !== 'OK'){
                    return dispatch({type:types.TOGGLE_LIKE_FAILURE})
                }
                console.log(json)
                dispatch(getUserInfo())
                return dispatch(receiveToggleLike(json))

            })
            .catch(error => {

                return dispatch({type:types.TOGGLE_LIKE_FAILURE})
            })
    }
}

function receiveToggleLike(json){
    return {
        type:types.TOGGLE_LIKE_SUCCESS,
        like_count:json.count,
        isLike:json.isLike
    }
}

export const getPrenext = (id) => {
    return (dispatch,getState) => {
        const options = getState().options.toJS()
        return dispatch({
            type:types.PRENEXT_ARTICLE,
            promise:api.getPrenext(id,options)
        })
    }
}

export const commentsNumberAdd = () => {
    return {
        type:types.ADD_COMMENT_NUMBER
    }
}
