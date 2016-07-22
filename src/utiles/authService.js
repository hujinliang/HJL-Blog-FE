/**
 * Created by jialao on 2016/7/21.
 */
import cookie from 'react-cookie'
import {CookieDomain} from '../config'

let cookieConfig = {};

export function saveCookie(name,value){
    cookie.save(name,value,cookieConfig);
}

export function getCookie(name){
    return cookie.load(name);
}

export function removeCookie(name){
    cookie.remove(name,cookieConfig);
}

export function signOut(){
    cookie.remove('token');
}

export function isLogin(){
    return !!cookie.load('token')
}

export function redirectToBack(nextState,replaceState){
    if(isLogin()){
        replaceState(null,'/')
    }
}

export function redirectToLogin(nextState,replaceState){
    if(!isLogin()){
        replaceState(null,'/login')
    }
}

