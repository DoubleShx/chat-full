const initialState = {
    messages: [],
    loading: false
}

export default (state=initialState, {type, payload}) => {
    switch(type) {
        case "MESSAGE_SET_ITEMS" : {
            return {
                ...state,
                messages: payload
            }
        }
        case "MESSAGE:SET_LOADING_STATUS": {
            return {
                ...state,
                loading: payload
            }
        }
        default: return state
    }
}



