/**
 * Created by jialao on 2016/7/20.
 */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../actions'
import ScrollTop from '../components/ScrollTop'
import Toaster from '../components/Toaster'


const mapStateToProps = state => {
    // console.log(state.globalVal.toJS())
    return {
        globalVal:state.globalVal.toJS(),
        showmsg:state.showmsg.toJS()
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions:bindActionCreators(Actions,dispatch)
    }
};

@connect(mapStateToProps,mapDispatchToProps)
export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    
    static fetchDate(){
        return [];
    }
    componentDidMount(){
        
    }
    
    componentWillReceiveProps(nextProps){
        const {globalVal} = this.props;
        console.log(globalVal)
        if(globalVal.styleMode !== nextProps.globalVal.styleMode)
        {
            document.body.className = nextProps.globalVal.styleMode
        }    
    }
    
    render(){
        // console.log(this.props)
        return (
            <div style={{height:'2000px'}}>
                <button onClick={this.props.actions.changeStyleMode}>change</button>
                <ScrollTop />
            </div>
        )
    }
}