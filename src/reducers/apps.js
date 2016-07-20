/**
 * Created by jialao on 2016/7/20.
 */
import {GET_APP_SUCCESS,GET_APP_FAILURE} from '../actions/types'
import {createReducer} from 'redux-immutablejs'
import {List} from 'immutable'

export default createReducer(List(['hellow']),{
    [GET_APP_FAILURE]:(state,action)=>state,
    [GET_APP_SUCCESS]:(state,{json})=>state.merge(json.data)
})