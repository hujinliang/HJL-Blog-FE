/**
 * Created by jialao on 2016/7/29.
 */
import React from 'react'
import {Link} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../../actions'

const mapStateToProps =  (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions:bindActionCreators(Actions,dispatch)
    }
}

@connect(mapStateToProps,mapDispatchToProps)
export default class Admin extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {children} = this.props;
        return (
            <div>
                <div className="background-admin">

                </div>
                <div className="container-fluid admin-container">
                    <div className="row">
                        <div className="admin-controller col-sm-2">
                            <div className="controller-title">控制台</div>
                            <div className="controller-menu">
                                <div className="fix"></div>
                                <Link className="controller-item" activeClassName="active" title="" to="/admin/articles">
                                    <i className="fa fa-file"></i>文章
                                </Link>
                                <div className="fix"></div>
                                <Link className="controller-item" activeClassName="active" title="" to="/admin/tags">
                                    <i className="fa fa-tags"></i>标签
                                </Link>
                                <div className="fix"></div>
                                <Link className="controller-item" activeClassName="active" title="" to="/admin/users">
                                    <i className="fa fa-user"></i>用户
                                </Link>
                                <div className="fix"></div>
                                <Link className="controller-item" activeClassName="active" title="" to="/admin/comments">
                                    <i className="fa fa-comments"></i>评论
                                </Link>
                                <div className="fix"></div>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>

        )
    }
}