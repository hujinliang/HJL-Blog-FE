/**
 * Created by jialao on 2016/7/27.
 */
import React from 'react'
import {Modal} from 'react-bootstrap'
import SNSLogin from './snsLogin'

export default class loginModal extends React.Component{
    render(){
        const {isShowModal,closeModal,logins} = this.props;
        return (
            <div>
                <Modal show={isShowModal} backdrop={true} onHide={closeModal}>
                    <Modal.Header>
                        <Modal.Title className="text-center">请使用以下方式登录</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="portlet-body">
                            <SNSLogin logins={logins}/>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}