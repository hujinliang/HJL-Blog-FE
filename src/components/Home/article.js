/**
 * Created by lenovo on 2016/7/23.
 */
import React from 'react'
import {Link} from 'react-router'
import {customTime} from '../../utiles'

export default class Articles extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {articleList} = this.props
        return (
            <ul className="article-list list-unstyled clearfix">
                {articleList.length > 0&&
                    articleList.map((article,i) =>
                        <li key={i} className="article-item">
                            <div>
                                <p className="list-top">
                                    <span className="item">{customTime(article.created)}</span>
                                </p>
                                <h4 className="title">
                                    <Link to={'/article/'+ article._id} className="link-title">{article.title}</Link>
                                </h4>
                                <div className="list-footer">
                                    <span>阅读 {article.visite_count}</span>
                                    <span>  评论 {article.comment_count}</span>
                                    <span>  喜欢 {article.like_count}</span>
                                </div>
                            </div>
                        </li>
                    )

                }
            </ul>
        )
    }
}