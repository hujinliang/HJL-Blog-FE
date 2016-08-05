/**
 * Created by jialao on 2016/8/5.
 */
import * as types from '../actions/types'
import {createReducer} from 'redux-immutablejs'
import {fromJS,List} from 'immutable'

const initialState = fromJS({
    items:[]
});

export default createReducer(initialState,{
    [types.GET_ADMINARTICLE_SUCCESS]:(state,{json}) => state.set('items',List(json.data)),
    [types.DELETE_ADMINARTICLE_SUCCESS]:(state,{id}) => {
        let items = state.get('items');
        let nowIndex;
        items.forEach((item,index) => {
            if(item._id == id){
                nowIndex = index;
                return false
            }
            return true;
        });
        let newItems = items.delete(nowIndex);
        return state.set('items',newItems)
    },
    [types.ADD_ARTICLE_SUCCESS]:(state,{json}) => {
        let items = state.get('items');
        let newItems = items.push(json.data);
        return state.set('items',newItems)
    }
})