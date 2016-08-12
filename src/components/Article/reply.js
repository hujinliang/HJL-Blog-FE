/**
 * Created by jialao on 2016/7/26.
 */
import React from 'react'
import {formatDate} from '../../utiles'
import defaultAvatar from '../../assets/imgs/userimg.png'

export default class Reply extends React.Component{
 render(){
     const {replys,k,showReply} = this.props;
     console.log(replys)
     return (

         <div className="replys">
             {replys.map((reply,i) => (
                 <div className="replys-item" key={i}>
                     <div className="reply-avatar">
                         <a href="javascript:;">
                             <img src={reply.user_info.avatar || defaultAvatar} alt=""/>
                         </a>
                     </div>
                     <div className="reply-body">
                         <div className="reply-header">
                             <span>{reply.user_info.nickname}</span>
                         </div>
                         <p className="reply-content">{reply.content}</p>
                         <div className="reply-footer">
                             <span className="reply-time">{formatDate(reply.created)}</span>
                             <a href="javascript:;" className="reply-reply" onClick={e=>showReply(e,k,reply.user_info.nickname)}>
                                 <i className="fa fa-mail-reply"> </i>
                                 回复
                             </a>
                         </div>
                     </div>

                 </div>
             ))
             }
         </div>


         // <div className="reply-list">
         //     {replys.map((reply,i) => (
         //         <div className="reply-item" key={i}>
         //             <p className="reply-content">
         //                 <a className="reply-user link-light">{reply.user_info.nickname}</a>
         //                 {reply.content}
         //             </p>
         //             <div className="reply-footer text-right">
         //                 <a href="javascript:;" className="reply" onClick={e=>showReply(e,k,reply.user_info.nickname)}>回复</a>
         //                 <span className="reply-time pull-left">{formatDate(reply.created)}</span>
         //             </div>
         //         </div>
         //     ))
         //     }
         // </div>
     )
 }
}