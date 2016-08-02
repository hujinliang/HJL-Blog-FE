/**
 * Created by jialao on 2016/8/2.
 */
import * as types from './types'
import api from '../api'

export const getAdminComment = () => {
    return {
        type:types.GET_ADMINCOMMENT,
        promise:api.getAdminCommentList()
    }
}