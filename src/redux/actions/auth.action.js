// import firebase from "firebase/app"

// import auth from "../../firebase"

// export const login = () => async dispatch => {
//     try {
//         const provider = new firebase.auth.GoogleAuthProvider();
//         const res = await auth.signInWithPopup(provider);
//         console.log(res)

//     }
//     catch (error) {

//     }
// }

import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionType";
import { authentication } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
 


export const signInWithGoogle = () => dispatch => {
    dispatch({
        type : LOGIN_REQUEST,
    })

    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
    signInWithPopup(authentication, provider)
    .then((res) => {
        const accessToken = res.user.accessToken

        const profile = {
            name : res.user.displayName,
            photoURL : res.user.photoURL
        }

        sessionStorage.setItem('ytAccessToken',accessToken)
        sessionStorage.setItem('ytUser',JSON.stringify(profile))


        dispatch({
            type : LOGIN_SUCCESS,
            payload : accessToken
        })
        dispatch({
            type : LOAD_PROFILE,
            payload : profile
        })
    })
    .catch((error) => {
        console.log(error)
        dispatch({
            type : LOGIN_FAIL,
            payload : error.message
        })
    })
}


export const logout = () => dispatch => {
    

        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
            dispatch({
                type : LOG_OUT,
            })
            sessionStorage.removeItem('ytAccessToken')
            sessionStorage.removeItem('ytUser')
        })
        .catch((error) => {
            console.log(error.message)
        });
}