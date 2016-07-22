/**
 * Created by jialao on 2016/7/22.
 */
import React,{Component} from 'react'

export default class Sidebar extends Component{
    render(){
        const {img} = this.props;
        let styles = {background:'url('+img+')'};
        return (
            <div className="col-sm-3 sidebar-box">
                <div className="cover-img" style={styles}></div>
                <div className="bottom-block">
                    <h1>HU</h1>
                    
                </div>
            </div>     
        )
    }
}