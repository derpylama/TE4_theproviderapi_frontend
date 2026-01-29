
export default LoginPage
import "./login.css"
import "../buttons/base_button.jsx"
import BaseButton from "../buttons/base_button.jsx"
import { useState } from "react"

import { UserLogin } from "../api/user_handler.js"

async function LoginOnClick({ usernameValue, passwordValue, token, SetUserToken }) {
    console.log(usernameValue)
    console.log(token)

    const controller = new AbortController();
    
    await UserLogin({SetUserToken, username:usernameValue, password:passwordValue, token:token, signal:controller.signal})

}

function LoginPage({ SetUserToken, token }) {
    const [ usernameValue, SetUsernameValue] = useState()
    const [ passwordValue, SetPasswordValue] = useState()


    return (
        <div className="login-con">
            <div className="login-card">
                <h1>Login</h1>
                <div id="input-con">
                    <input type="text" id="username" placeholder="Användarnamn" onChange={(e) => (SetUsernameValue(e.target.value))}/>
                    <input type="password" id="password" placeholder="Lösenord" onChange={(e) => (SetPasswordValue(e.target.value))} required/>
                </div>
                <BaseButton text={"login"} onClick={() => LoginOnClick({usernameValue, passwordValue, token, SetUserToken})}></BaseButton>
            </div>
        </div>
    )
}