/**
 * Created by jialao on 2016/7/22.
 */
import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import * as Actions from '../../actions'

const validate = values => {
    const errors ={};
    if(!values.nickname){
        errors.nickname = "Required"
    }else if(!/^[(\u4e00-\u9fa5)0-9a-zA-Z\_\s@]+$/.test(values.nickname))  {
        errors.nickname = '昵称不合法';
    } 
    return errors;
};

const mapStateToProps = state => {
    return {
        auth:state.auth.toJS(),
        initialValues:state.auth.toJS().user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
};

@connect(mapStateToProps,mapDispatchToProps)
@reduxForm({
    form:'setting',
    fields:['nickname'],
    validate
})
export default class Setting extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const {values,actions} = this.props;
        console.log(values);
        actions.updateUser(values);
    }
    validatorClass(field){
        let initClass = 'form-control';
        if(field.invalid){
            initClass += ' ng-invalid'
        }
        if(field.dirty){
            initClass += ' ng-dirty'
        }
        return initClass;
    }
    render(){
        const {fields:{nickname},dirty,invalid} = this.props;
        // console.log(nickname)
        return (
            <div className="settings-box">
                <div className="settings-container">
                    <h2 className="title">设置</h2>
                    <hr />
                    <div className="profile">
                        <div className="control-group">
                            <form className="settings-form" name="settingForm" onSubmit={this.handleSubmit} noValidate>
                                <div className="form-group">
                                    <label className="control-label">昵称</label>
                                    <input placeholder="2-15字符，中英文、数字和下划线"
                                        {...nickname}
                                           type="text"
                                           className={ this.validatorClass(nickname) }
                                           minLength="2" maxLength="15" />
                                </div>
                                <button type="submit" disabled={ dirty && invalid } className="btn btn-block btn-lg btn-primary">保 存</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
