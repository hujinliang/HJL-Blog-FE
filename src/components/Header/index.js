/**
 * Created by jialao on 2016/7/21.
 */
import React from 'react'
import {Link} from 'react-router'
import {Dropdown} from 'react-bootstrap'

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
        return (
            <div className="navbar-box navbar-skin">
                <div className="navbar-menu">
                    <Link className={'navbar-item logo '+(location.pathname !== '/personal'&&'active')} title="首页" to="/">
                        HU
                    </Link>
                    <Link className={'navbar-item mobile'} activeClassName="active" title="mobile" to="/personal">
                        <i className="fa fa-mobile"></i>
                    </Link>
                </div>

                <div className="navbar-expanded">
                    <div>
                        <a href="javascript:" className="navbar-item" onClick={this.handleChangeMode}>
                            {(styleMode === 'day-mode')?<i className="fa fa-sun-o"></i>:<i className="fa fa-moon-o"></i>}
                        </a>
                    </div>
                    {(auth.token && auth.user)?
                        <div>
                            <a href="javascript:" className="navbar-item expanded-logout" onClick={logout}>
                                <i className="fa fa-sign-out"></i>
                            </a>
                            <Link to="/settings" className="navbar-item expended-avatar">
                                <img src={auth.user.avatar}/>
                            </Link>
                        </div>
                        :
                        <div>
                            <Link to="/login" className="navbar-item" activeClassName="active">
                                <i className="fa fa-sign-in"></i>
                            </Link>
                        </div>
                    }

                </div>

                <div className="navbar-shrink">
                    {(auth.token && auth.user)?
                        <Dropdown id="dropdown-menu" className="pull-right">
                            <a href="javascript:;" className="shrink-avatar" bsRole="toggle">
                                <img src={ auth.user.avatar || defaultAvatar} />
                            </a>
                            <Dropdown.Menu className="dropdown-menu">
                                <li>
                                    <Link to="/settings"><i className="fa fa-cog"></i> 设置</Link>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="javascript:;" className="shrink-logout" onClick={logout}>
                                        <i className="fa fa-sign-out"></i> 登出
                                    </a>
                                </li>
                            </Dropdown.Menu>
                        </Dropdown>
                        :
                        <div className="pull-right">
                            <Link className="shrink-login" title="登录" to="/login">
                                <i className="fa fa-sign-in"></i> 登录
                            </Link>
                        </div>
                    }
                    <div className="pull-right">
                        <a className="navbar-item change-mode" href="javascript:;" onClick={this.handleChangeMode}>
                            {(styleMode === 'day-mode')?<i className="fa fa-sun-o"></i>:<i className="fa fa-moon-o"></i>}
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}