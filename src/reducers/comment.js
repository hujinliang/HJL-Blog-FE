/**
 * Created by jialao on 2016/7/25.
 */
import * as types from '../actions/types'
import {createReducer} from 'redux-immutablejs'
import {fromJS,List} from 'immutable'

const initialState = fromJS({
    isFetching:false,
    items:[]
});

export default createReducer(initialState,{
    [types.COMMENT_LIST_SUCCESS]:(state,{json}) => {
        return state.set(
            'items',List(json.data)
        )
    },
    [types.COMMENT_LIST_FAILURE]:(state,action) => state,
    [types.ADD_COMMENT_SUCCESS]:(state,{comment}) => {


        let items = state.get('items');
        let newItems = items.push(comment);
        return state.set('items',newItems)

    },
    [types.ADD_REPLY_SUCCESS]:(state,action) =>{


        let items = state.get('items');
        let nowIndex;
        let newItem;
        items.forEach((item,index) => {
            if(item._id == action.cid){
                nowIndex = index;
                newItem = items.get(index)
                return false
            }
            return true;
        });
        newItem.replys = action.replys;

        let newItems = items.delete(nowIndex);
        let newDItems = newItems.insert(nowIndex,newItem)
        return state.set('items',newDItems)

    }
})

