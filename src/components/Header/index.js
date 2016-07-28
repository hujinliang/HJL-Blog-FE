/**
 * Created by jialao on 2016/7/21.
 */
import React from 'react'
import {Link} from 'react-router'
import {Dropdown} from 'react-bootstrap'
import defaultAvatar from '../../assets/imgs/userimg.png'


export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.handleChangeMode = this.handleChangeMode.bind(this);
    }
    handleChangeMode(e){
        e.preventDefault();
        const {changeStyleMode} = this.props;
        changeStyleMode();
    }
    render(){
        const {styleMode,location,auth,logout} = this.props;
        // console.log(auth)
        return (
            <div className="navbar-box navbar-skin">
                <div className="wrap">
                    <div className="contents clearfix">
                        <div className="navbar-menu">
                            <Link className={'navbar-item logo '+(location.pathname !== '/personal'&&'active')} title="首页" to="/">
                                HU
                            </Link>
                            <Link className={'navbar-item'} activeClassName="active" title="mobile" to="/personal">
                                <i className="fa fa-user"></i>
                            </Link>
                        </div>

                        <div className="navbar-expanded">
                                <a href="javascript:" className="navbar-mode" onClick={this.handleChangeMode}>
                                    {(styleMode === 'day-mode')?<i className="fa fa-sun-o"></i>:<i className="fa fa-moon-o"></i>}
                                </a>
                            {(auth.token && auth.user)?
                                <div>
                                    <a href="javascript:" className="navbar-item expanded-logout" onClick={logout}>
                                        <i className="fa fa-sign-out"></i>登出
                                    </a>
                                    <Link to="/setting" className="navbar-user" title={auth.user.nickname}>
                                        <img src={auth.user.avatar || defaultAvatar}/>
                                    </Link>
                                </div>
                                :
                                <Link to="/login" className="navbar-item" activeClassName="active">
                                    <i className="fa fa-sign-in"></i>登录
                                </Link>
                               
                            }

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}