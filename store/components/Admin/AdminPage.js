/**
 * Created by jialao on 2016/8/2.
 */
import React from 'react'
import {Link} from 'react-router'

export default class AdminPage extends React.Component{
    render(){
        const style = {marginRight:'20px'};
        return (
            <div className="col-sm-offset-2">
                <div className="jumbotron" style={style}>
                    <h1>欢迎进入管理中心</h1>
                    <p>
                        这是一个简洁的后台管理页面，提供对文章，标签，文章以及评论基本的管理功能
                    </p>
                    <Link className="btn btn-lg btn-success" to="/write" style={{color:'white'}}>
                        <i className="fa fa-bold"> </i>&nbsp;&nbsp;新博客
                    </Link>
                </div>
            </div>
        )
    }
}