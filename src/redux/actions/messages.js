import {messagesAPI} from '../../utilities/api'

const ActionsMessages = {
    setMessages: items => ({
        type: "MESSAGE_SET_ITEMS",
        payload: items
    }),
    fetchMessages: () => dispatch => {
        messagesAPI.getAll().then(({data}) => {
            dispatch(ActionsMessages.setMessages(data))
        })
    }
}
export default ActionsMessages;


