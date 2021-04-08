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
    fetchDialogs: () => dispatch => {
        dialogsAPI.getAll().then(({ data }) => {
          dispatch(Actions.setDialogs(data));
        })
      }
}
export default Actions;