/**
 * Created by jialao on 2016/8/2.
 */
import * as types from '../actions/types'
import {createReducer} from 'redux-immutablejs'
import {fromJS} from 'immutable'

const initialState = fromJS({
    items:[]
});

export default createReducer(initialState,{
    [types.GET_ADMINCOMMENT_SUCCESS]:(state,action) => state.set('items',action.json.data)
})