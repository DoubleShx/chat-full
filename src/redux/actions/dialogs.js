import { dialogsAPI } from '../../utilities/api'

const Actions = {
    setDialogs: items => ({
        type: "DIALOGS:SET_ITEMS",
        payload: items
    }),
    setCurrentDialog: id => ({
      type: "DIALOGS:SET_CURRENT_DIALOG",
      payload: id
    }),
    setLoadingState: payload => ({
      type: "DIALOGS:LOADING_STATE",
      payload: payload
    }),
    fetchDialogs: () => dispatch => {
        dispatch(Actions.setLoadingState(true))
        dialogsAPI.getAll().then(({ data }) => {
          dispatch(Actions.setDialogs(data));
          dispatch(Actions.setLoadingState(false))
        }).catch(err=> {
          dispatch(Actions.setDialogs(`${err}`));
          dispatch(Actions.setLoadingState(false))
      })
      }
}
export default Actions;