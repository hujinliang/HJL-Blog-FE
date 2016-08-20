/**
 * Created by jialao on 2016/7/21.
 */
import React,{Component} from 'react'
import defaultImage from '../../assets/imgs/background.jpg'
import hjlAvatar from '../../assets/imgs/cat.jpg'

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
                                                <div className="personal-header">
                                                    <img src={hjlAvatar} alt="avatar"/>
                                                </div>
                                                <div className="personal-container">
                                                    <div className="personal-context">
                                                        <div className="personal-tag">
                                                            <i className="fa fa-mortar-board"> </i>背景
                                                        </div>
                                                        <div className="personal-content">
                                                            <p>
                                                                在读研究生
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="personal-study">
                                                        <div className="personal-tag">
                                                            <i className="fa fa-crosshairs"> </i>技术
                                                        </div>
                                                        <div className="personal-content">
                                                            <p>
                                                                主要从事web前端方面的开发，除了完成实验室项目外，在空闲时间会去学一些感兴趣的新知识，写一些个人的项目进行练习。技术方面包括JavaScript/Css/Html5/Jquery/Bootstrap/Nodejs/Angularjs/React等。
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="personal-like">
                                                        <div className="personal-tag">
                                                            <i className="fa fa-heart"> </i>爱好
                                                        </div>
                                                        <div className="personal-content">
                                                            <p>
                                                                平时除了看书以及写代码外，还喜欢看动漫,听歌和看电影
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="personal-more">
                                                        <div className="personal-tag">
                                                            <i className="fa fa-th-large"> </i>更多
                                                        </div>
                                                        <div className="personal-content">
                                                            <a href="javascript:;">
                                                                <i className="fa fa-github"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="footer-container">
                                    <ul>
                                        <li>
                                            <span>@2016 / 京ICP备16040054号</span>
                                        </li>
                                        <li>
                                            <a className="github" href="https://github.com/HUJINLIANG/HJL-Blog-react" target="_block">
                                                <i className="fa fa-github"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="email" href="mailto:1617451312@qq.com" target="_block">
                                                <i className="fa fa-envelope"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}