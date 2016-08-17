/**
 * Created by jialao on 2016/7/21.
 */
import React from 'react'
import {Link} from 'react-router'
import {Dropdown} from 'react-bootstrap'
import defaultAvatar from '../../assets/imgs/userimg.png'
import hjlAvatar from '../../assets/imgs/background.jpg'


export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isDown:true
        };

        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }
    handleScroll(){
        if(window.scrollY > 50){
            this.setState({
                isDown:false
            })
        }else{
            this.setState({
                isDown:true
            })
        }
    }

    render(){
        const {location,auth,logout} = this.props;
        // console.log(auth)
        return (
            <div className="absolute-wrap">
                <div className="wrap-container">
                    <div className={this.state.isDown?"menu-outer slide-down":"menu-outer slide-up"}>
                        <div className="menu-inner">
                            <div className="brand">
                                <a href="https://github.com/HUJINLIANG">
                                    <img src={hjlAvatar} alt="" className="hjl-avatar"/>
                                    <div className="homelink">月亮</div>
                                </a>
                            </div>
                            <div className="menu-list">
                                <ul>
                                    <li><Link className={(location.pathname !== '/personal'&&location.pathname !== '/login'&&location.pathname !== '/admin'&&location.pathname !== '/admin/articles'&&location.pathname !== '/admin/tags'&&location.pathname !== '/admin/users'&&location.pathname !== '/admin/comments'&&'active')} title="首页" to="/">
                                        <i className="fa fa-bitcoin"> </i>博客
                                    </Link></li>
                                    <li><Link  activeClassName="active" title="personal" to="/personal">
                                        <i className="fa fa-user"> </i>关于
                                    </Link></li>
                                    {auth.token && auth.user && auth.user.role === 'admin' &&
                                    <li><Link  activeClassName="active" title="admin" to="/admin">
                                        <i className="fa fa-envira"> </i>管理
                                    </Link></li>
                                    }
                                    {(auth.token && auth.user)?
                                        (
                                            <li><a href="javascript:" onClick={logout}>
                                                <i className="fa fa-sign-out"> </i>登出
                                            </a></li>
                                        )
                                        :
                                        <li><Link to="/login"  activeClassName="active">
                                            <i className="fa fa-sign-in"> </i>登录
                                        </Link></li>

                                    }
                                    {auth.token && auth.user&&
                                    <li ><Link to="/setting" title={auth.user.nickname}>
                                        <img src={auth.user.avatar || defaultAvatar} className="user-avatar"/>
                                    </Link></li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        )
    }
}