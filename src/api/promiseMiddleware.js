/**
 * Created by jialao on 2016/7/21.
 */
export default function promiseMiddleware(){
    return next => action =>{
        const {promise,type, ...rest} = action;
        
        if(!promise){
            return next(action);
        }
        
        const SUCCESS = type+'_SUCCESS';
        const REQUEST = type+'_REQUEST';
        const FAILURE = type+'_FAILURE';
        next({...rest,type:REQUEST});
        
        return promise.then(response => {
            return {
                json:response.data,
                status:response.statusText
            }
        }).then(({json,status}) => {
            next({...rest,json,type:SUCCESS});
        }).catch(error => {
            next({...rest,error,type:FAILURE});
        })
    }
}