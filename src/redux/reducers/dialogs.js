const initialState = {
    items: [],
    currentDialog: null,
    loading: false
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case "DIALOGS:SET_ITEMS":
            return {
                ...state,
                items: payload
            };
        case "DIALOGS:SET_CURRENT_DIALOG":
            return {
                ...state,
                currentDialog: payload
            };
        case "DIALOGS:LOADING_STATE":
            return {
                ...state,
                loading:payload
            }
        default:
            return state;
    }
};