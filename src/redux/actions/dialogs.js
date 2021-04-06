import { dialogsAPI } from '../../utilities/api'

const Actions = {
    setDialogs: items => ({
        type: "DIALOGS:SET_ITEMS",
        payload: items
    }),
    fetchDialogs: () => dispatch => {
        dialogsAPI.getAll().then(({ data }) => {
          dispatch(Actions.setDialogs(data));
        }).catch(error => console.log(error));
      }
}
export default Actions;