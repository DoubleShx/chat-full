import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Message from '../../components/Message'
import Dialogs from '../../components/Dialogs'
import { Row, Col, Empty, Spin, Result } from 'antd'

import { dialogsActions } from '../../redux/actions'
import {messagesActions} from '../../redux/actions'

import './Home.scss'
import ChatProperties from '../../components/chatProperties'
import SearchPanel from '../../components/searchPanel'
import CreatorMessage from '../../components/CreatorMessage'



const Home = (props) => {
    const {dialogs, messages, fetchDialogs, setCurrentDialog, fetchMessages} = props
    const audioLink='https://notificationsounds.com/storage/sounds/file-sounds-1148-juntos.ogg';
    const [dialogspart, SetDialog] = useState(dialogs.items);
    const [filtered, SetFilterDialog] = useState('');
    const [selectedDialog, SetSelectedDialog] = useState([{text:null, avatar: null, box:null, checked:null, date:null, id: null}])   
    console.log(messages.loading)

    // -----------------------------------------------------------------------------------------------------

    useEffect(() => {
        if (!dialogs.items.length) {
        fetchDialogs(); }
        else {
        SetDialog(dialogs.items) }
    }, [dialogs.items])

    const searchDialog = (searchItem) => {    
        SetDialog(dialogs.items.filter(el=> el.name.toLowerCase().includes(searchItem.toLowerCase()) || el.lastmessage.toLowerCase().includes(searchItem.toLowerCase()))) ;
        SetFilterDialog(searchItem)
    }


    // --------------------------------------------------------------------------------------------------------


    const SelectDialog = (id) => {
        setCurrentDialog(id)
       
        
    }
    useEffect(() => {
        fetchMessages(messages.messages)
        let messageRender = messages.messages.filter(el=> el.id === dialogs.currentDialog)
        if (!!messageRender[0]) {
        SetSelectedDialog(messages.messages.filter(el=> el.id === dialogs.currentDialog))
        } else {
        SetSelectedDialog([{text:null, avatar: null, box:null, checked:null, date:null, id: null}])
        }
    }, [dialogs.currentDialog])






    return (
        
        <section className="Home">
            <Row>
            <Col xs={{span:24,  order: 1 }} sm={8} className="searchPanel">
                <SearchPanel searchDialog={searchDialog} filtered={filtered}/>
            </Col>
            <Col xs={{span:24, order: 3 }} sm={16} className="chatProperties">
                <ChatProperties />
            </Col>            
                <Col xs={{span:24, order: 2 }} sm={8}  className="dialogues">
                    <Dialogs items={dialogspart} SelectDialog={SelectDialog} spiner={dialogs.loading}/>
                </Col>
                <Col xs={{span:24, offset:0, order: 4 }} sm={{span:16, offset:8}} className="chatContainer_media"> 
            <div className="chatContainer">
                <div className="chat">
                    <div className="messages" >
                  { messages.loading === true ? <Spin className="message_spiner"/> : messages.loading==='error' ? <Result status="error" title="ERROR: Problem with server We are fixing bugs"/> :
                   selectedDialog[0].avatar ? selectedDialog.map((el, index) => {
                      return <Message  selectedDialog={selectedDialog[index]} key={index} />
                  }) : <Empty className="emptyData"/>
                  }
                

                </div>
                    <CreatorMessage/>
                </div>
            </div>
            </Col>
            </Row>
        </section>
    )
}
const mapStateToProps = (dialogs, ...messages) => dialogs;


export default connect(
    mapStateToProps,
    {...dialogsActions, ...messagesActions}
  )(Home);