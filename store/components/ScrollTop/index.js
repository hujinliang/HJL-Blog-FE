/**
 * Created by jialao on 2016/7/20.
 */
import React from 'react'

export default class scrollTop extends React.Component{
    constructor(props){
        super(props);
        this.state = {isShowTop:false};
        this.top = this.top.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }
    shouldComponentUpdate(nextProps,nextState){
        return nextState.isShowTop !== this.state.isShowTop
    }
    top(e){
        e.preventDefault();
        window.scrollTo(0,0)
    }
    handleScroll(){
        if(window.scrollY > 200){
            this.setState({
                isShowTop:true
            })
        }else{
            this.setState({
                isShowTop:false
            })
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.isShowTop&&
                        <div className="gotop" onClick={this.top}>
                            <i className="fa fa-arrow-up"></i>
                        </div>
                }
            </div>
        )
    }
}