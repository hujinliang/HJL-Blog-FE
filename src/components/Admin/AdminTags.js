/**
 * Created by jialao on 2016/8/2.
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'
import {reduxForm} from 'redux-form'

const mapStateToProps = state => {
    return {
        adminTagList:state.adminTagList.toJS(),
        initialValues:{
            name:'javascript',
            sort:'1'
        }
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions:bindActionCreators(actions,dispatch)
    }
}

const validate = values => {
    const errors = {};
    if(!values.name){
        errors.name = 'Required'
    }
    return errors
}

@connect(mapStateToProps,mapDispatchToProps)
@reduxForm({
    form:'tag',
    fields:['name','sort'],
    validate
})
export default class AdminTags extends React.Component{
    constructor(props){
        super(props);
        this.handleAddTag = this.handleAddTag.bind(this);
        this.deleteTag = this.deleteTag.bind(this)
    }

    componentDidMount(){
        const {actions} = this.props;
        actions.getAdminTagList();
        
    }

    deleteTag(id){
        const {actions} = this.props;
        actions.deleteTag(id)
    }

    validatorClass(field){
        let initClass = 'form-control';
        if(field.invalid){
            initClass += ' ng-invalid';
        }
        if(field.dirty){
            initClass += ' ng-dirty'
        }
        return initClass
    }

    handleAddTag(e){
        e.preventDefault();
        const {values,actions} = this.props;
        actions.addTag(values);
    }
    
    render(){
        const style = {marginRight:'20px'};
        const {actions,adminTagList,fields:{name,sort},dirty,invalid} = this.props;

        return (
            <div className="col-sm-offset-2 col-sm-10">
                <div className="admin-tags" style={style}>
                    <div className="tagForm-container">
                        <form className="form-inline" name="tagForm" onSubmit={this.handleAddTag}>
                            <div className="form-group form-group-lg">
                                <label className="sr-only" for="name">标签名</label>
                                <input type="text" ref="name" className={this.validatorClass(name)} id="name" name="name" placeholder="请输入标签名" {...name} />
                            </div>
                            <div className="form-group form-group-lg">
                                <label className="sr-only" for="sort">优先值</label>
                                <input type="number" ref="sort" className="form-control" id="sort" name="sort" placeholder="请输入优先值" {...sort}  />
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={dirty && invalid}>
                                添加
                            </button>
                        </form>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>标签名</th>
                            <th>优先级</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {adminTagList.items.map((item,index) =>
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.sort}</td>
                                <td>
                                    <a href="javascript:;" className="btn btn-danger" onClick={e=>this.deleteTag(item._id)}>
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