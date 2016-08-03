/**
 * Created by jialao on 2016/7/22.
 */
import * as types from '../actions/types'
import {createReducer} from 'redux-immutablejs'
import {List} from 'immutable'

export default createReducer(List(),{
    [types.TAG_LIST_SUCCESS]:(state,{json}) => {state=List();return state.merge(json.data)},
    [types.TAG_LIST_FAILURE]:(state) => state
})