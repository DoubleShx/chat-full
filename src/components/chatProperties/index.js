import React from 'react'
import classNames from 'classnames'
import {Row} from 'antd'

import './chatProperties.scss'

const ChatProperties = () => {
    return(
        <>
            <Row><h2 className="userName_chatProperties">User</h2></Row>
            <Row><span className={classNames("status", {isOnline: true, IsntOnline: false})}><div className="circle"></div><p>Онлайн</p></span></Row>
        </>
    )
}
export default ChatProperties;