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
        this.handleAddArticle = this.handleAddArticle.bind(this)
    }

    componentDidMount(){
        const {actions} = this.props;
        actions.getAdminArticleList();
    }

    deleteArticle(id){
        const {actions} = this.props;
        actions.deleteArticle(id);
    }

    handleAddArticle(e){
        e.preventDefault();
        const {actions} = this.props;

        actions.addArticle({
            title:this.refs.title.value,
            content:this.refs.content.value
        })
    }

    render(){
        const style = {marginRight:'20px'};
        const {adminArticleList} = this.props;
        console.log(adminArticleList.items)
        return (
            
            <div className="col-sm-offset-2 col-sm-10">
                <div className="admin-articles" style={style}>
                    <form className="form-inline" name="tagForm" onSubmit={this.handleAddArticle}>
                        <div className="form-group form-group-lg">
                            <label className="sr-only" for="name">aa</label>
                            <input type="text" ref="title" className="form-control" id="title" name="title" placeholder="请输入标题" />
                        </div>
                        <div className="form-group form-group-lg">
                            <label className="sr-only" for="sort">aa</label>
                            <input type="text" ref="content"  className="form-control" id="content" name="content" placeholder="请输入内容"  />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            添加
                        </button>
                    </form>
                    
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