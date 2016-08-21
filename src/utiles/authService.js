/**
 * Created by jialao on 2016/7/21.
 */
import cookie from 'react-cookie'
import {CookieDomain} from '../config'

let cookieConfig = {
    expires:new Date((new Date).valueOf() + 24*60*60*1000)
};

if(CookieDomain !== ''){
    cookieConfig = { domain: CookieDomain }
}

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
    cookie.remove('role',{domain: CookieDomain,path:'/'});
    cookie.remove('role',{domain: CookieDomain,path:'/article'})
    cookie.remove('role',{domain: CookieDomain,path:'/admin'})
    cookie.remove('token',{domain: CookieDomain,path:'/'});
    cookie.remove('token',{domain: CookieDomain,path:'/article'});
    cookie.remove('token',{domain: CookieDomain,path:'/admin'})
    
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

