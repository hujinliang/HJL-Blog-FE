/**
 * Created by lenovo on 2016/7/22.
 */
import * as types from './types'
import api from '../api'
import {getUserInfo} from './auth'

export const getTagList = () => {
  return {
      type:types.TAG_LIST,
      promise:api.getTagList()
  }
};
