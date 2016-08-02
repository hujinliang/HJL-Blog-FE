/**
 * Created by jialao on 2016/8/2.
 */
import React from 'react'

export default class AdminArticles extends React.Component{
    render(){
        const style = {marginRight:'20px'};
        return (
            <div className="col-sm-offset-2">
                <div className="jumbotron" style={style}>
                    <h1>欢迎进入管理中心</h1>
                    <p>
                        这是一个简洁的后台管理页面，提供对文章，标签，文章以及评论基本的管理功能
                    </p>
                </div>
            </div>
        )
    }
}