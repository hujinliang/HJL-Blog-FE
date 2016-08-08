/**
 * Created by jialao on 2016/7/26.
 */
import React from 'react'
import {formatDate} from '../../utiles'

export default class Reply extends React.Component{
 render(){
     const {replys,k,showReply} = this.props;
     console.log(replys)
     return (
         <div className="reply-list">
             {replys.map((reply,i) => (
                 <div className="reply-item" key={i}>
                     <p className="reply-content">
                         <a className="reply-user link-light">{reply.user_info.nickname}</a>
                         {reply.content}
                     </p>
                     <div className="reply-footer text-right">
                         <a href="javascript:;" className="reply" onClick={e=>showReply(e,k,reply.user_info.nickname)}>回复</a>
                         <span className="reply-time pull-left">{formatDate(reply.created)}</span>
                     </div>
                 </div>
             ))
             }
         </div>
     )
 }
}