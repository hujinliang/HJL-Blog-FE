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
        adminCommentList:state.adminCommentList.toJS()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions:bindActionCreators(actions,dispatch)
    }
}

@connect(mapStateToProps,mapDispatchToProps)
export default class AdminComments extends React.Component{
    constructor(props){
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
    }

    componentDidMount(){
        const {actions,adminCommentList} = this.props;
        actions.getAdminComment()
    }

    deleteComment(id){
        const {actions} = this.props;
        actions.deleteComment(id)
    }

    render(){
        const style = {marginRight:'20px'};
        const {actions,adminCommentList} = this.props;
        console.log(adminCommentList.items)
        return (
            <div className="col-sm-offset-2 col-sm-10">
                <div className="admin-comments" style={style}>
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>用户</th>
                            <th>所属文章</th>
                            <th>内容</th>
                            <th>时间</th>
                            <th>回复数</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {adminCommentList.items.map((item,index) =>
                            <tr key={index}>
                                <td>{item.user_id.nickname}</td>
                                <td>{item.aid.title}</td>
                                <td>{item.content}</td>
                                <td>{formatDate(item.created)}</td>
                                <td>{item.replys.length}</td>
                                <td>
                                    <a href="javascript:;" className="btn btn-danger" onClick={e=>this.deleteComment(item._id)}>
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