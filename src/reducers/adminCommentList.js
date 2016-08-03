/**
 * Created by jialao on 2016/8/2.
 */
import * as types from '../actions/types'
import {createReducer} from 'redux-immutablejs'
import {fromJS,List} from 'immutable'

const initialState = fromJS({
    items:[]
});

export default createReducer(initialState,{
    [types.GET_ADMINCOMMENT_SUCCESS]:(state,action) => state.set('items',List(action.json.data)),
    [types.DELETE_COMMENT_SUCCESS]:(state,{id}) => {
        // debugger;
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
        // const index = items.findIndex((element,index) => {
        //     return element._id == id;
        // })
        // items.splice(index,1);
        return state.set(
            'items',newitems
        );
    }
})