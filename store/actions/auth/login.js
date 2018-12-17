import Actions from '../actionTypes'

export const ValidateLogin = (username, password) => {
    if (username === 'admin@admin.com' && password === 'password')
        return ({
            type: Actions.LOGIN_SUCCESS,
            payload: { username }
        })
    return ({
        type: Actions.LOGIN_FAILED
    })

}
