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
    [types.GET_ADMINCOMMENT_SUCCESS]:(state,action) => state.set('items',fromJS(action.json.data)),
    [types.DELETE_COMMENT_SUCCESS]:(state,{id}) => {
        debugger;
        const items = state.get('items');
        const index = items.findIndex((element,index) => {
            return element._id == id;
        })
        items.splice(index,1);
        return state.mergeDeep({
            items:items
        });
    }
})