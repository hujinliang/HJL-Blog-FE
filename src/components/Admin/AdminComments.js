/**
 * Created by jialao on 2016/8/2.
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'

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
    }

    componentDidMount(){
        const {actions,adminCommentList} = this.props;
        if(adminCommentList.items.length<1){
            actions.getAdminComment()
        }
    }

    render(){
        const style = {marginRight:'20px'};
        const {actions,adminCommentList} = this.props;

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
                            <tr>
                                <td>用户</td>
                                <td>所属文章</td>
                                <td>内容</td>
                                <td>时间</td>
                                <td>回复数</td>
                                <td>操作</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}