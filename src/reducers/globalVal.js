/**
 * Created by jialao on 2016/7/20.
 */
import * as types from '../actions/types'
import {createReducer} from 'redux-immutablejs'
import {fromJS} from 'immutable'

export default createReducer(fromJS({
    styleMode:'day-mode',
    indexImg:''
}),{
    [types.CHANGE_STYLE_MODE]:(state,action) => state.set('styleMode',(state.get('styleMode') === 'day-mode')?'night-mode':'day-mode')
})