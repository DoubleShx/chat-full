const initialState = {
    messages: []
}

export default (state=initialState, {type, payload}) => {
    switch(type) {
        case "MESSAGE_SET_ITEMS" : {
            return {
                ...state,
                messages: payload
            }
        }
        default: return state
    }
}



