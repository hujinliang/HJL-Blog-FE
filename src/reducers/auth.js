/**
 * Created by jialao on 2016/7/21.
 */
import * as types from '../actions/types'
import {getCookie} from '../utiles/authService'
import {createReducer} from 'redux-immutablejs'
import {fromJS} from 'immutable'

const initialState = fromJS({
    token:getCookie('token')||null,
    user:null
});

export default createReducer(initialState,{
    [types.LOGIN_SUCCESS]:(state,action) => {return state.merge({token:action.token})},
    [types.GET_USERINFO_SUCCESS]:(state,action) => state.merge({user:action.json}),
    [types.GET_USERINFO_FAILURE]:(state,action) => state.set('user',null),
    [types.LOGOUT_USER]:(state,action) => state.merge({token:null,user:null}),
    [types.UPDATE_USER_SUCCESS]:(state,action) => state.merge({user:action.user})
})