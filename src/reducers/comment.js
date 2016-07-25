/**
 * Created by jialao on 2016/7/25.
 */
import * as types from '../actions/types'
import {createReducer} from 'redux-immutablejs'
import {fromJS} from 'immutable'

const initialState = fromJS({
    isFetching:false,
    items:[]
});

export default createReducer(initialState,{
    [types.COMMENT_LIST_SUCCESS]:(state,{json}) => {
        return state.merge({
            errMsg:null,
            items:fromJS(json.data)
        })
    },
    [types.COMMENT_LIST_FAILURE]:(state,action) => state,
    [types.ADD_COMMENT_SUCCESS]:(state,action) => {
        return state.mergeDeep({
            errMsg:null,
            items:state.get('items').push(action.comment)
        })
    },
    [types.ADD_REPLY_SUCCESS]:(state,action) =>{
        return state.mergeDeep({
            errMsg:null,
            items:state.get('items').map(item=>{
                if(item.get('_id') === action.cid){
                    return item.set('replys',action.replys)
                }
                return item
            })
        })
    }
})