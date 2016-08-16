/**
 * Created by lenovo on 2016/7/24.
 */
import React from 'react'

export default class Like extends React.Component{
    render(){
        const {likeCount,isLike,toggleLike} = this.props;
        return (
            <div className="article-like">
                <a href="javascript:;" className={isLike?'liked-btn be-liked':'liked-btn'} onClick={toggleLike}>
                    <i className="fa fa-thumbs-up"> </i>
                </a>
            </div>

        // {
        // <div className="article-share clearfix">
        //     <a href="javascript:;" className={isLike?'like-btn note-liked':'like-btn'} onClick={toggleLike}>
        //             <span className="like-content">
        //                 <i className={isLike?'fa fa-heart':'fa fa-heart-o'}></i>  喜欢
        //             </span>
        //             <span className="like-count">
        //                 {likeCount}
        //             </span>
        //     </a>
        // </div>
        // }
        )
    }
}