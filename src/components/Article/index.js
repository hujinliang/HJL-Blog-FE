/**
 * Created by lenovo on 2016/7/24.
 */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../../actions'
import Content from './content'
import Like from './like'
import Comment from './comment'
import Prenext from './prenext'
import LoginModal from '../Login/modal'

const mapStateToProps = state =>{
    return {
        auth:state.auth.toJS(),
        articleDetail:state.articleDetail.toJS(),
        prenextArticle:state.prenextArticle.toJS(),
        commentList:state.commentList.toJS(),
        sns:state.sns.toJS()
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
        this.handleSubmitComment = this.handleSubmitComment.bind(this)
        this.handleSubmitReply = this.handleSubmitReply.bind(this)
        this.state = {
            showModal:false
        }
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
            actions.getArticleDetail(id);
            actions.getPrenext(id);
            actions.getCommentList(id);
        }
    }

    toggleLike(){
        const {actions,params,auth} = this.props;
        if(auth.token){
            actions.toggleLike(params.id)
        }else{
            this.openLoginModal()
        }
    }

    handleSubmitComment(e,content){
        e.preventDefault();
        const {actions,params} = this.props;
       
        actions.addComment({
            aid:params.id,
            content:content
        })
    }

    handleSubmitReply(e,cid,content){
        e.preventDefault();
        const {actions} = this.props;
        actions.addReply(cid,{content})
    }

    closeLoginModal(){
        this.setState({
            showModal:false
        })
    }

    openLoginModal(){
        this.setState({
            showModal:true
        })
    }

    render(){
        const {articleDetail,prenextArticle,commentList,auth,sns} = this.props;
        // console.log(commentList)
        return (

        <div>
            <div className="background">
            </div>
            <div className="outer-container">

            <div className="wrap-container">
                <div className="content-outer">
                    <div className="content-inner">
                        <div className="article-box">
                            <Content articleDetail={articleDetail}/>
                            <Like toggleLike={this.toggleLike} likeCount={articleDetail.like_count} isLike={articleDetail.isLike}/>
                            <Prenext prenextArticle={prenextArticle}  />
                            <Comment commentList={commentList} auth={auth} submitComment={this.handleSubmitComment} submitReply={this.handleSubmitReply} openLoginModal={this.openLoginModal.bind(this)}/>
                            <LoginModal logins={sns.logins} isShowModal={this.state.showModal} closeModal={this.closeLoginModal.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        

            // <div className="article-box">
            //     <Content articleDetail={articleDetail}/>
            //     <Like toggleLike={this.toggleLike} likeCount={articleDetail.like_count} isLike={articleDetail.isLike}/>
            //     <Prenext prenextArticle={prenextArticle}  />
            //     <Comment commentList={commentList} auth={auth} submitComment={this.handleSubmitComment} submitReply={this.handleSubmitReply} openLoginModal={this.openLoginModal.bind(this)}/>
            //     <LoginModal logins={sns.logins} isShowModal={this.state.showModal} closeModal={this.closeLoginModal.bind(this)}/>
            // </div>
        )
    }
}