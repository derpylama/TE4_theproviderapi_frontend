import { useEffect, useState } from "react";

async function GetToken() {
    const response = await fetch("https://tp1.api.ntigskovde.se/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username: "emilemil", password: "emilemil"})
    })

    const data = await response.json();

    return data.token; 
}

async function VerifyToken({token, signal}) {

    if (token != "") {
        const respons = await fetch("https://tp1.api.ntigskovde.se/api/auth/verify", {
            method: "POST",
            headers: {"Authorization": "Bearer " + token},
            signal: signal
        })

    }    
}

function useVerify({ token }) {
    const [tokenStatus, setTokentatus] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!token) {
            setLoading(false)
            return
        }
    }, [])    
        
    const controller = new AbortController();
    
    useEffect(() => {
        async function verify() {
            try {
                setLoading(true)
                const status = await VerifyToken({ token, signal: controller.signal })
                
            } catch (err) {
                if (err.name) {
                    setError(err)
                }
            } finally {
                setLoading(false)
            }
        }

        verify()

        // when the fetch completes
        return () => {
            controller.abort();
        };
    }, [])
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

export {useAuthToken, VerifyToken, useVerify}