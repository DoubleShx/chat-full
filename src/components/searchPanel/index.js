import React from 'react'

import {Col, Row} from 'antd'
import {WechatOutlined, EditFilled} from '@ant-design/icons'
import './searchPanel.scss'

const SearchPanel = ({searchDialog, filtered}) => {
    return (
        <div className="searchPanel">
            <Row className="searchLine">
                <Col span={4}>  <WechatOutlined />  </Col>
                <Col span={20} className="info"> <span>Список диалогов</span>  </Col>
            </Row>
            <Row className="searchLine">
            <Col span={4} ><EditFilled span={4} /></Col >
            <Col span={20}><input className="searchInput" placeholder="search..." value={filtered} onChange={(event)=> searchDialog(event.target.value)}/></Col> 
            </Row>
        </div>
    )
}

export default SearchPanel;