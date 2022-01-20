import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../redux/actions/auth.action";
import "./_LoginScreen.scss";

const LoginScreen = () => {

    const dispatch = useDispatch()


    const accessToken = useSelector(state => state.auth.accessToken)

    const handleLogin = () => {
        dispatch(signInWithGoogle())
    }
    let navigate = useNavigate();

    useEffect(() => {
        if (accessToken) {
            navigate('/')
        }
    },[accessToken,navigate])

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="YoutubeLogo" />
                <button onClick={handleLogin}>
                Login With Google
                </button>
                <p>You need to login before using this product</p>
            </div>
        </div>
    )
}

export default LoginScreen; 