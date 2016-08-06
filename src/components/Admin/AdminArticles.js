/**
 * Created by jialao on 2016/8/2.
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'
import {formatDate} from '../../utiles'

const mapStateToProps = state => {
    return {
        adminArticleList:state.adminArticleList.toJS()
    }
};

const mapDispatchTopROPS = dispatch => {
    return {
        actions:bindActionCreators(actions,dispatch)
    }
};

@connect(mapStateToProps,mapDispatchTopROPS)
export default class AdminArticles extends React.Component{
    constructor(props){
        super(props)
        this.deleteArticle = this.deleteArticle.bind(this)
    }

    componentDidMount(){
        const {actions} = this.props;
        actions.getAdminArticleList();
    }

    deleteArticle(id){
        const {actions} = this.props;
        actions.deleteArticle(id);
    }


    render(){
        const style = {marginRight:'20px'};
        const {adminArticleList} = this.props;
        console.log(adminArticleList.items)
        return (
            <div className="col-sm-offset-2 col-sm-10">
                <div className="admin-articles" style={style}>
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>标题</th>
                            <th>写作时间</th>
                            <th>评论数</th>
                            <th>访问数</th>
                            <th>喜爱数</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {adminArticleList.items.map((item,index) =>
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{formatDate(item.created)}</td>
                                <td>{item.comment_count}</td>
                                <td>{item.visit_count}</td>
                                <td>{item.like_count}</td>
                                <td>
                                    <a href="javascript:;" className="btn btn-danger" onClick={e=>this.deleteArticle(item._id)}>
                                        <i className="fa fa-remove"></i>
                                    </a>
                                </td>
                            </tr>
                        )

                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}