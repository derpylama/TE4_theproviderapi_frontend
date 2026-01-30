import { useEffect, useState } from "react";
import { useAuthToken } from "./token_handler.js"

const BASE_URL = "https://tp1.api.ntigskovde.se/api/";



async function GetAll( {token, userToken, content, signal } ) {
    const response = await fetch(BASE_URL + content + "/get-all", {
        method: "GET",
        headers: {"Authorization": "Bearer " + token,
        },
        signal
    })

    return await response.json();
}

function useFetch({ url, requestType, dep, asPerson }) {
    const [data, setData] = useState(null)
    const [fetchError, setError] = useState(null)
    const [fetchLoading, setLoading] = useState(true)

    const {token: token, loading: authLoading, error: authError} = useAuthToken()
    const personToken = ""

    useEffect(() => {
        
        if (authLoading) return;

        if (authError) {
            setError(error);
            setLoading(false);
            return;
        }
    
        if (token == null) {
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        const controller = new AbortController();
        if (requestType === "POST") {
            
            async function post() {
                
                if (!asPerson) {
                    try {
                        const RESPONSE = await fetch(url, {
                            method: "POST",
                            headers: {"Authorization": "Bearer " + token},
                            // body: fields,
                            signal: controller.signal
                        });
            
                        const DATA = await RESPONSE.json();
                        setData(DATA)
                    } catch (err) {
                        setError(err)
                    } finally {
                        setLoading(false)
                    }
            
                } else {
                    try {
                        const RESPONSE = await fetch(url, {
                            method: "POST",
                            headers: {"Authorization": "Bearer " + token,
                                "X-Person-Token": personToken
                    
                            },
                            // body: fields,
                            signal: controller.signal
                        })
    
                        const DATA = await RESPONSE.json();
                        setData(DATA);
                    } catch (err) {
                        setError(err)
                    } finally {
                        setLoading(false)
                    }
                }


            }

            post()


            
        } else if (requestType === "GET") {
            
            async function get() {
                
                if (!asPerson) {
                    try {
                        const RESPONSE = await fetch(url, {
                            method: "GET",
                            headers: {"Authorization": "Bearer " + token},
                            signal: controller.signal
                        });
            
                        const DATA = await RESPONSE.json();
                        setData(DATA)
                    } catch (err) {
                        setError(err)
                    } finally {
                        setLoading(false)
                    }
            
                } else {
                    try {
                        const RESPONSE = await fetch(url, {
                            method: "GET",
                            headers: {"Authorization": "Bearer " + token,
                                "X-Person-Token": personToken
                    
                            },
                            signal: controller.signal
                        })
    
                        const DATA = await RESPONSE.json();
                        setData(DATA);
                    } catch (err) {
                        setError(err)
                    } finally {
                        setLoading(false)
                    }
                }


            }

            get()

            

        }

        return () => {
            controller.abort();
        }; 

    }, [dep, url, requestType, token, asPerson])
    
    return { data,loading: fetchLoading, error: fetchError}
}




// Returns all blogpost for the blog specified by the id
async function BlogPosts( limit, offset, tag ) {
    const response = await fetch(BASE_URL + "blog/post/get-all", {
        method: "GET",
        headers: {"Authorization": "Bearer " + token,
        },
    })

    const data = await response.json();
    return data;
}



export { GetAll, useFetch }