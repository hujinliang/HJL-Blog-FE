/**
 * Created by lenovo on 2016/7/22.
 */
import React from 'react'
import tiny from '../../assets/imgs/tiny.gif'

export default class Tags extends React.Component{

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(changeSort,options){
        return function(e){
            changeSort(e,options);
        }
    }
    render(){
        const {tagList,options,changeSort,isFetching} = this.props;
        // console.log(tagList)
        return(
            
            <ul className="sort-tags list-unstyled clearfix">
                <li>
                    <a href="javasciript:" className={(options.sortName == 'created')&&'active'} onClick={this.handleClick(changeSort,{'currentPage':1,'sortName':'created','tagId':''})}>最新</a>
                </li>
                <li>
                    <a href="javasciript:" className={(options.sortName == 'visit_count')&&'active'} onClick={this.handleClick(changeSort,{'currentPage':1,'sortName':'visit_count','tagId':''})}>最热</a>
                </li>
                {
                    tagList.map((tag,i) => {
                        return (
                            <li key={i}>
                                <a className={(options.tagId == tag._id)&&'active'} href="javascript:" onClick={this.handleClick(changeSort,{'currentPage':1,'sortName':'','tagId':tag._id})}>{tag.name}</a>
                            </li>
                        )
                    })
                }
                {isFetching&&
                <li>
                    <img src={tiny} alt="" className="loader-tiny"/>
                </li>
                }
            </ul>
            
        )
    }
}