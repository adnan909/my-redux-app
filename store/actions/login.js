import * as Expo from 'expo'
import Actions from './actionTypes'

export const googleAuth = async () => {

    try {
        const result = await Expo.Google.logInAsync({
            androidClientId: '86072608741-lsoi8hcke2t8m7qvomhe0omod0serebm.apps.googleusercontent.com',
            iosClientId: '86072608741-prt8fmiq3qbhqv9citf32qk21o4r33nk.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
        })
        // .then(res => res.json())
        // .then(result => {
        console.log(result)
        if (result.type === 'success') {
            return ({
                type: Actions.GOOGLE_LOGIN_SUCCESS,
                payload: result
            })
        }
        else {
            return {
                type: Actions.GOOGLE_LOGIN_FAILED,
                payload: result
            };
        }
        // })
    }
    catch (err) {
        return {
            type: Actions.GOOGLE_LOGIN_ERROR,
            payload: err
        }
    };

}
