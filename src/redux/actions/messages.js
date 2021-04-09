import {messagesAPI} from '../../utilities/api'

const ActionsMessages = {
    setMessages: items => ({
        type: "MESSAGE_SET_ITEMS",
        payload: items
    }),
    setMessagesLoadingStatus: payload => ({
        type: "MESSAGE:SET_LOADING_STATUS",
        payload
    }),
    fetchMessages: () => dispatch => {
        dispatch(ActionsMessages.setMessagesLoadingStatus(true))
        messagesAPI.getAll()
        .then(({data}) => {
            dispatch(ActionsMessages.setMessages(data));
            dispatch(ActionsMessages.setMessagesLoadingStatus(false))
        })
        .catch(err => { 
            dispatch(ActionsMessages.setMessagesLoadingStatus('error')) 
        })
    }
}
export default ActionsMessages;


