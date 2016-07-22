/**
 * Created by lenovo on 2016/7/22.
 */
import React from 'react'

export default class Tags extends React.Component{
    render(){
        const {tagList} = this.props;
        return(
            <ul className="sort-tags list-unstyled clearfix">
                <li>
                    <a href="javasciript:">最新</a>
                </li>
                <li>
                    <a href="javasciript:">最热</a>
                </li>
                {
                    tagList.map((tag,i) => {
                        return (
                            <li key={i}>
                                <a href="javascript:">{tag.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}