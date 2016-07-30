/**
 * Created by jialao on 2016/7/29.
 */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../../actions'

const mapStateToProps =  (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions:bindActionCreators(Actions,dispatch)
    }
}

@connect(mapStateToProps,mapDispatchToProps)
export default class Admin extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {children} = this.props;
        return (
            <div className="container-fluid" style={{background:'yellow',height:'1000px'}}>
                <div className>
                    
                </div>
                {children}
            </div>
        )
    }
}