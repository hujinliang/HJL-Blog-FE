/**
 * Created by lenovo on 2016/7/23.
 */
import React from 'react'

export default class Footer extends React.Component{
    render(){
        return (
            <footer>
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
            </footer>
        )

    }
}