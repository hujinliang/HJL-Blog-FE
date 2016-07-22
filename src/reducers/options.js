/**
 * Created by lenovo on 2016/7/22.
 */
import * as types from '../actions/types'
import {createReducer} from 'redux-immutablejs'
import {fromJS} from 'immutable'

const initialState = fromJS({
    currentPage:1,
    itemsPerPage:10,
    sortName:'created',
    tagId:''
});

export default createReducer(initialState,{
    [types.CHANGE_OPTIONS]:(state,action) => {
        return state.merge(action.option)
    }
})