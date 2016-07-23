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
                            <span>@2015</span>
                        </li>
                        <li>
                            <a className="github" href="https://github.com/HUJINLIANG" target="_block">
                                <i className="fa fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        )

    }
}