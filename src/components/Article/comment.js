/**
 * Created by jialao on 2016/7/25.
 */
import React from 'react'
import defaultAvatar from '../../assets/imgs/avatar.png'
import {formatDate} from '../../utiles'

export default class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            commentContent:''
        }
        this.handleCommentContentChange = this.handleCommentContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleCommentContentChange(e){
        this.setState({
            commentContent:e.target.value
        })
    }
    handleSubmit(submitComment){
        return (e) =>{
            submitComment(e,this.state.commentContent);
            this.setState({
                commentContent:''
            })
        }

    }
    render(){
        const {commentList,auth,submitComment} = this.props
        return (
            <div className="comment-container clearfix">
                <div className="comment-head clearfix">
                    {commentList.items.length || 0}条评论
                    <a href="javascript:;" className="goto-comment pull-right"><i className="fa fa pencil"></i>添加评论</a>
                </div>
                <div id="comment_list">
                    {commentList.items.map((comment,i) =>
                            <div className="comment-item" key={i}>
                                <div className="content">
                                    <div className="meta-top">
                                        <a className="avatar">
                                            <img src={comment.user_id.avatar || defaultAvatar} alt={comment.user_id.nickname} />
                                        </a>
                                        <a className="author-name link-light">{comment.user_id.nickname}</a>
                                        <span className="reply-time">
                                            {formatDate(comment.created)}
                                        </span>
                                    </div>
                                    <p className="comment-content">{comment.content}</p>
                                    <div className="comment-footer text-right">
                                        <a className="reply" href="javascript:;" >回复</a>
                                    </div>


                                    <form className="new-reply hide" ref={'reply_form_'+i} id={'reply_form_'+i}>
                                        <div className="comment-text">
                                         <textarea id={'replyContent'+i}
                                                   maxLength="2000"
                                                   ref={'replyContent'+i}
                                                   placeholder="写下你的回复…"></textarea>
                                            <div>
                                                <input type="submit" value="发 表" className="btn btn-sm btn-info" />
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                    )}
                </div>
                { auth.token ?
                    <form className="new_comment" onSubmit={this.handleSubmit(submitComment)}>
                        <div className="comment-text">
                        <textarea
                            maxLength="2000"
                            required
                            placeholder="写下你的评论…"
                            onChange={this.handleCommentContentChange}
                            id="comment_content"  value={this.state.commentContent}>

                        </textarea>
                            <div>
                                <input type="submit" id="comment_submit_btn" value="发 表" className="btn btn-info" />
                            </div>
                        </div>
                    </form>
                    :
                    <div>
                        <p className="comment-signin">
                            <button className="btn btn-info">登录后发表评论</button>
                        </p>
                    </div>
                }
            </div>
        )
    }
}