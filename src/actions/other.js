/**
 * Created by jialao on 2016/7/20.
 */
import * as types from './types'
// import api from '../api'

export const changeStyleMode = () =>{
    return {
        type:types.CHANGE_STYLE_MODE
    }
};

export const showMsg = (content,type='error') => {
    return {
        type:types.SHOW_MSG,
        message:{
            content:content,
            type:type
        }
    }
};

export const hideMsg = () =>{
    return {
        type:types.HIDE_MSG
    }
}