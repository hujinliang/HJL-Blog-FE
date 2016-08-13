/**
 * Created by jialao on 2016/7/21.
 */
import React,{Component} from 'react'
import defaultImage from '../../assets/imgs/background.jpg'

export default class PersonalPage extends Component{
	constructor(props){
		super(props)
		this.props = props;
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			isInverse : false
		}
	}

	handleClick(){
		let state = this.state.isInverse;
		this.setState({
			isInverse : !state
		})
	}

    render(){
    	 var imgFigureClassName = 'img-figure';
             imgFigureClassName += this.state.isInverse ? ' is-inverse' : '';
        return (
        	<div>
	            <div className="background">
	            </div>
            	<div className="outer-container">
		       		<div className="wrap-container">
		                <div className="content-outer">
		                    <div className="content-inner">
		                    	<div className='about-container'>
		                    		<figure className={imgFigureClassName} onClick={this.handleClick}>
						                <img src={defaultImage}
						                     
						                />
						                <figcaption>						   
						                    <div className="img-back" onClick={this.handleClick}>
						                      <p>
						                        你好
						                      </p>
						                    </div>
						                </figcaption>
					            	</figure>
		                    	</div>
            				</div>
            			</div>
            		</div>
           		 </div>
       		 </div>
        )
    }
}