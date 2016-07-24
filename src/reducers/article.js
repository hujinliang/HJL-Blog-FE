import * as types from '../actions/types'
import {createReducer} from 'redux-immutablejs'
import {fromJS} from 'immutable'

const initialState = fromJS({
	isFetching:false,
	isMore:true,
    items:[]
});

export const articleList = createReducer(initialState,{
    [types.ARTICLE_LIST_REQUEST]:(state,action) => state.set('isFetching',true),
    [types.ARTICLE_LIST_SUCCESS]:(state,action) => {
        
        console.log()
        
        return state.merge({
            isFetching:false,
            isMore: !(action.json.data.length < action.itemsPerPage),
            items: action.isAdd?state.get('items').concat(action.json.data):action.json.data
        })
    }
});