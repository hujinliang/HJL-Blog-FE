/**
 * Created by jialao on 2016/7/22.
 */
import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../../actions'
import Sidebar from './sidebar'
import Tags from './tags'

const mapStateToProps = (state) => {
  return {
      globalVal:state.globalVal.toJS(),
      tagList:state.tagList.toJS(),
      articleList:state.articleList.toJS(),
      options:state.options.toJS()
  }
};

const mapDispatchToProps = dispatch => {
    return {
        actions:bindActionCreators(Actions,dispatch)
    }
};

@connect(mapStateToProps,mapDispatchToProps)
export default class Home extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const{actions,tagList,articleList} = this.props;
        if(tagList.length < 1){
            actions.getTagList()
        }
        // if(articleList.length < 1){
        //     actions.getArticleList()
        // }
    }

    handleChange(e,option,isAdd=false){
        e.preventDefault();
        const {actions} = this.props;
        actions.changeOptions(option);
        actions.getArticleList(isAdd)
    }

    render(){
        const {globalVal,tagList,articleList,options} = this.props;
        return (
            <div>
                <div className="container-fluid main-box">
                    <div className="row">
                        <Sidebar img={globalVal.indexImg}/>
                        <div className="col-sm-7 col-sm-offset-3 main-content">
                            <Tags tagList={tagList}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}