/**
 * Created by jialao on 2016/7/27.
 */
import React from 'react'
import {getCookie} from '../../utiles/authService'
import {API_ROOT} from '../../config'

export default class SNSLogin extends React.Component{
    constructor(props){
        super(props);
        this.handleSnsLogin = this.handleSnsLogin.bind(this)
    }
    handleSnsLogin(e,provider){
        e.preventDefault();
        let search = API_ROOT + 'auth/' + provider + '?redirectUrl=' + window.location.origin;
        const token = getCookie('token');
        if(token){
            search += '&access_token=' + token.replace(/(^\")|(\"$)/g,'')
        }
        window.location.href = search;
    }

    
    render(){
        const {logins} = this.props;
        return (
            <div className="login-sns">
                <ul>
                    {logins.map((item,i) => 
                        <li key={i} onClick={e=>this.handleSnsLogin(e,item)}>
                            <a href="javascript:;" className={item}>
                                <i className={'fa fa-'+item}></i>
                            </a>
                        </li>    
                    )}
                </ul>
            </div>
        )
    }
    
}