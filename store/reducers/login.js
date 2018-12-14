import Actions from '../actions/actionTypes'
//get user data from storage otherwise null
const loginReducer = (state = { user: null }, action) => {
    switch (action.type) {
        case Actions.GOOGLE_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                user: action.payload
            })
            break;
        case Actions.GOOGLE_LOGIN_FAILED:
            return Object.assign({}, state, {
                user: action.payload
            })
            break
        case Actions.GOOGLE_LOGIN_ERROR:
            return Object.assign({}, state, {
                user: action.payload
            })
            break
        default:
            return state
            break;
    }
}

export default loginReducer