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
            itemPerPage:options.itemsPerPage,
            promise:api.getArticleList(options)
        })
    }
};
