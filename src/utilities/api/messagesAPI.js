import axios from '../helpers/baseUrl'

export default {
    getAll: () => axios.get('/messages')
}