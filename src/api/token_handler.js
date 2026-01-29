import { useEffect, useState } from "react";

async function GetToken() {
    const response = await fetch("https://tp1.api.ntigskovde.se/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username: "emilemil", password: "emilemil"})
    })

    const data = await response.json();

    return data.token; 
}

async function VerifyToken({token}) {

    if (token != "") {
        fetch("https://tp1.api.ntigskovde.se/api/auth/verify", {
            method: "POST",
            headers: {"Authorization": "Bearer " + token}
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })

    }    
}

function useAuthToken() {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadToken() {
            try {
                const t = await GetToken();
                setToken(t)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadToken();
    }, []) 

    return { token, loading, error }
}

export {useAuthToken, VerifyToken}