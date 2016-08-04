/**
 * Created by jialao on 2016/8/2.
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'
import {reduxForm} from 'redux-form'
import {formatDate} from '../../utiles'

const mapStateToProps = state => {
    return {
        adminUserList:state.adminUserList.toJS(),
        initialValues:{
            email:'user@qq.com',
            password:'user',
            nickname:'user',
            role:'user'
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions:bindActionCreators(actions,dispatch)
    }
};

const validate = values => {
    const errors = {};
    if(!values.email){
        errors.email = 'Required';
    }
    if(!values.password){
        errors.password = 'Required'
    }
    if(!values.nickname){
        errors.nickname = 'Required'
    }
    return errors;
}

@connect(mapStateToProps,mapDispatchToProps)
@reduxForm({
    form:'user',
    fields:['email','password','nickname','role'],
    validate
})
export default class AdminUsers extends React.Component{
    constructor(props){
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this)
    }

    componentDidMount(){
        const {actions} = this.props;
        actions.getAdminUserList();
    }

    deleteUser(id){
        const {actions} = this.props;
        actions.deleteUser(id)
    }

    handleAddUser(e){
        e.preventDefault();
        const {actions,values} = this.props;
        actions.addUser(values)
    }

    validatorClass(field){
        let initClass = 'form-control'
        if(field.invalid){
            initClass += ' ng-invalid'
        }
        if(field.dirty){
            initClass += ' ng-dirty'
        }
        return initClass
    }

    render(){

        const {adminUserList,dirty,invalid,fields:{email,password,nickname,role}} = this.props;

        const style = {marginRight:'20px'};
        return (
            <div className="col-sm-offset-2 col-sm-10">
                <div className="admin-user" style={style}>
                    <div className="userForm-container">
                        <form className="form-inline" name="userForm" onSubmit={this.handleAddUser}>
                            <div className="form-group">
                                <label className="sr-only" for="email">email</label>
                                <input type="text" ref="email" className={this.validatorClass(email)} id="email" name="email" placeholder="请输入邮箱" {...email} />
                            </div>
                            <div className="form-group">
                                <label className="sr-only" for="password">password</label>
                                <input type="text" ref="password" className={this.validatorClass(password)} id="password" name="password" placeholder="请输入密码" {...password}  />
                            </div>
                            <div className="form-group">
                                <label className="sr-only" for="nickname">nickname</label>
                                <input type="text" ref="nickname" className={this.validatorClass(nickname)} id="nickname" name="nickname" placeholder="请输入昵称" {...nickname} />
                            </div>
                            <div className="form-group">
                                <label className="sr-only" for="sort">role</label>
                                <input type="text" ref="role" className={this.validatorClass(role)} id="role" name="role" placeholder="请输入权限类型" {...role}  />
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={invalid}>
                                添加
                            </button>
                        </form>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>邮箱</th>
                            <th>昵称</th>
                            <th>provider</th>
                            <th>role</th>
                            <th>喜爱数</th>
                            <th>创建时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {adminUserList.items.map((item,index) =>
                            <tr key={index}>
                                <td>{item.email}</td>
                                <td>{item.nickname}</td>
                                <td>{item.provider}</td>
                                <td>{item.role}</td>
                                <td>{item.likeList.length}</td>
                                <td>{formatDate(item.created)}</td>
                                <td>
                                    <a href="javascript:;" className="btn btn-danger" onClick={e=>this.deleteUser(item._id)}>
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