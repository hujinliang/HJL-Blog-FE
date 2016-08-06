/**
 * Created by jialao on 2016/8/3.
 */
import * as types from '../actions/types'
import {createReducer} from 'redux-immutablejs'
import {fromJS,List} from 'immutable'

const initialState = fromJS({
    items:[]
});

export default createReducer(initialState,{
    [types.GET_ADMINTAG_SUCCESS]:(state,{json}) => state.set('items',List(json.data)),
    [types.ADD_ADMINTAG_SUCCESS]:(state,{json}) => {
        const items = state.get('items');
        let newItems = items.push(json.data);
        return state.set(
            'items',
            newItems
        );
    },
    [types.DELETE_ADMINTAG_SUCCESS]:(state,{id}) => {
        const items = state.get('items');
        var nowindex;
        items.forEach((item,index) => {
            if(item._id == id){
                nowindex = index;
                return false
            }
            return true
        })
        var newitems = items.delete(nowindex)
        return state.set(
            'items',newitems
        );

    }
})