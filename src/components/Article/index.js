/**
 * Created by lenovo on 2016/7/24.
 */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../../actions'
import Content from './content'
import Like from './like'

const mapStateToProps = state =>{
    return {
        auth:state.auth.toJS(),
        articleDetail:state.articleDetail.toJS()
    }
};

const mapDispatchToProps = dispatch => {
      return {
          actions:bindActionCreators(Actions,dispatch)
      }
};

@connect(mapStateToProps,mapDispatchToProps)
export default class Article extends React.Component{
    constructor(props){
        super(props);
        this.fetchArticleData = this.fetchArticleData.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
    }

    componentDidMount(){
        const {params:{id},actions} = this.props;
        this.fetchArticleData(id);
        actions.getSnsLogins();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.params.id !== this.props.params.id){
            this.fetchArticleData(nextProps.params.id);
        }
    }

    fetchArticleData(id){
        const {actions} = this.props;
        if(id){
            actions.getArticleDetail(id)
        }
    }

    toggleLike(){
        const {actions,params,auth} = this.props;
        if(auth.token){
            actions.toggleLike(params.id)
        }
    }

    render(){
        const {articleDetail} = this.props;
        console.log(articleDetail)
        return (
            <div className="article-box">
                <Content articleDetail={articleDetail}/>
                <Like toggleLike={this.toggleLike} likeCount={articleDetail.like_count} isLike={articleDetail.isLike}/>
            </div>
        )
    }
}