/**
 * Created by jialao on 2016/7/25.
 */
import React from 'react'
import {Link} from 'react-router'

export default class Prenext extends React.Component{
    render(){
        const {prenextArticle} = this.props;
        return (
            <div className="prenext">
                {prenextArticle.prev._id?
                    <div className="text-left prev">
                        <Link className="link-title" to={'/article/'+prenextArticle.prev._id}><span>上一篇：</span>{prenextArticle.prev.title}</Link>
                    </div>
                    :''
                }
                {prenextArticle.next._id?
                    <div className="text-right prev">
                        <Link className="link-title" to={'/article/'+prenextArticle.next._id}><span>下一篇：</span>{prenextArticle.next.title}</Link>
                    </div>
                    :''
                }
            </div>
        )
    }
}