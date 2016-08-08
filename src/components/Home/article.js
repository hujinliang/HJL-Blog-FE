/**
 * Created by lenovo on 2016/7/23.
 */
import React from 'react'
import {Link} from 'react-router'
import {customTime} from '../../utiles'

export default class Articles extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(changeSort,options){
        return function(e){
            changeSort(e,options);
        }
    }

    render(){
        const {articleList,changeSort} = this.props
        console.log(articleList)
        return (
            <ul className="article-list list-unstyled clearfix">
                {articleList.length > 0&&
                articleList.map((article,i) =>
                    <li key={i} className="article-item">
                        <div className="articleList-item">
                            <p className="list-top">
                                <span className="time">{customTime(article.created)}</span>
                            </p>
                            <h4 className="title">
                                <Link to={'/article/'+ article._id} className="link-title">{article.title}</Link>
                            </h4>
                            <p className="list-footer">

                                <span className="visit-count">  阅读 {article.visit_count}</span>
                                <span className="comment-count">  评论 {article.comment_count}</span>
                                <span className="like-count">  喜欢 {article.like_count}</span>
                                <span>  标签&nbsp;
                                    {article.tags.map((tag,index) => {
                                        return (
                                            <span>
                                                 <a href="javascript:;" onClick={this.handleClick(changeSort,{'currentPage':1,'sortName':'','tagId':tag._id})}>
                                                {tag.name}
                                            </a> /
                                            </span>

                                        )
                                    })}
                                </span>
                            </p>
                        </div>
                    </li>
                )

                }
            </ul>


            // <ul className="article-list list-unstyled clearfix">
            //     {articleList.length > 0&&
            //         articleList.map((article,i) =>
            //             <li key={i} className="article-item">
            //                 <div>
            //                     <p className="list-top">
            //                         <span className="item">{customTime(article.created)}</span>
            //                     </p>
            //                     <h4 className="title">
            //                         <Link to={'/article/'+ article._id} className="link-title">{article.title}</Link>
            //                     </h4>
            //                     <div className="list-footer">
            //                         <span>阅读 {article.visit_count}</span>
            //                         <span>  评论 {article.comment_count}</span>
            //                         <span>  喜欢 {article.like_count}</span>
            //                     </div>
            //                 </div>
            //             </li>
            //         )
            //
            //     }
            // </ul>
        )
    }
}