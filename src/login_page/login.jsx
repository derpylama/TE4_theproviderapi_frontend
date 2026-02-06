export default LoginPage
import "./login.css"
import "../buttons/base_button.jsx"
import BaseButton from "../buttons/base_button.jsx"
import { useEffect, useState } from "react"

import { UserLogin } from "../api/user_handler.js"
import { useAuthToken } from "../api/token_handler.js"
import { Link, Navigate, useNavigate } from "react-router-dom"

async function LoginOnClick({ usernameValue, passwordValue, SetUserToken, token, loading, error, navigate }) {
    const controller = new AbortController();

    if (loading || token == null) {return}

    await UserLogin({SetUserToken, username:usernameValue, password:passwordValue, token:token, signal:controller.signal})
    
    navigate(-1)
}

function LoginPage({ SetUserToken }) {
    const [ usernameValue, SetUsernameValue] = useState()
    const [ passwordValue, SetPasswordValue] = useState()
    var navigate = useNavigate()
    const {token, loading, error} = useAuthToken()


    return (
        <div className="login-con">
            <div className="login-card">
                <h1>Logga in</h1>
                <div id="input-con">
                    <input type="text" id="username" placeholder="Användarnamn" onChange={(e) => (SetUsernameValue(e.target.value))}/>
                    <input type="password" id="password" placeholder="Lösenord" onChange={(e) => (SetPasswordValue(e.target.value))} required/>
                </div>
                <BaseButton text={"Logga in"} onClick={() => LoginOnClick({usernameValue, passwordValue, SetUserToken, token, loading, error, navigate})}></BaseButton>
                <Link to="/">Avbryt</Link>
            </div>
        </div>
    )
}