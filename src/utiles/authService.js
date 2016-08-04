/**
 * Created by jialao on 2016/7/21.
 */
import cookie from 'react-cookie'
import {CookieDomain} from '../config'

let cookieConfig = {
    path:'/'
};

export function saveCookie(name,value){
   
    cookie.save(name,value,{});
    
}

export function getCookie(name){
    return cookie.load(name);
}

export function removeCookie(name){

    cookie.remove(name,{});

}

export function signOut(){
    cookie.remove('role',{path:'/'});
    cookie.remove('role',{path:'/article'})
    cookie.remove('role',{path:'/admin'})
    cookie.remove('token',{path:'/'});
    cookie.remove('token',{path:'/article'});
    cookie.remove('token',{path:'/admin'})
    
}

export function isLogin(){
    return !!cookie.load('token')
}

export function redirectToBack(nextState,replaceState){
    if(isLogin()){
        replaceState(null,'/')
    }
}

export function isAdmin(){
    return cookie.load('role') === 'admin'
}

export function redirectToLogin(nextState,replaceState){
    if(!isLogin()){
        replaceState(null,'/login')
    }
}

export function adminAuth(nextState,replaceState){
    if(!isAdmin()){
        replaceState(null,'/')
    }
}

