/**
 * Created by jialao on 2016/7/21.
 */
require('es6-promise').polyfill();
import axios from 'axios'
import {API_ROOT} from '../config'
import {getCookie,signOut} from '../utiles/authService'

axios.defaults.baseURL = API_ROOT;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function(config){
    config.headers = config.headers || {};
    if(getCookie('token')){
        config.headers.Authorization = 'Bearer '+getCookie('token').replace(/(^\")|(\"$)/g,'');
    }
    return config;
},function(err){
    return Promise.reject(error)
});

axios.interceptors.response.use(function(response){
   if(response.status === 401){
       signOut();
       window.location.pathname = '/login'
   } 
    return response;
},function(err){
    return Promise.reject(err)
});

export const UserResource = (method, id, data, api='users') => {

    return axios[method](api + (id ? ('/' + id) : ''), data)
}
export const AuthResource = (method, id, data, api='auth') => {
    return axios[method](api + (id ? ('/' + id) : ''), data)
}
export const ArticleResource = (method, id, controller, data, api='article') => {
    return axios[method](api + (id ? ('/' + id) : '') + (controller ? ('/' + controller) : ''), data)
}
export const TagResource = (method, id, data, api='tags') => {
    return axios[method](api + (id ? ('/' + id) : ''), data)
}
export const CommentResource = (method, id, controller, data, api='comment') => {
    return axios[method](api + (id ? ('/' + id) : '') + (controller ? ('/' + controller) : ''), data)
}
export const MobileResource = (method, id, data, api='mobile') => {
    return axios[method](api + (id ? ('/' + id) : ''), data)
}