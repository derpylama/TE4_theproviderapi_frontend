import { useEffect, useState } from "react";
import { GetToken, useAuthToken } from "./token_handler.js"

const BASE_URL = "https://tp1.api.ntigskovde.se/api/";

let requestQueue = Promise.resolve();

export function enqueueRequest(fn) {
    requestQueue = requestQueue.then(fn, fn);
    return requestQueue;
}

async function GetAll( {token, userToken, content, signal } ) {
    const response = await fetch(BASE_URL + content + "/get-all", {
        method: "GET",
        headers: {"Authorization": "Bearer " + token,
        },
        signal
    })

    return await response.json();
}

// function useFetch({ url, requestType, dep, asPerson }) {
//     const [data, setData] = useState([])
//     const [fetchError, setError] = useState(null)
//     const [fetchLoading, setLoading] = useState(true)


//     var personToken = sessionStorage.getItem("x-person-token") 

//     useEffect(() => {
        
//         // if (authLoading) return;

//         // if (authError) {
//         //     setError(error);
//         //     setLoading(false);
//         //     return;
//         // }
    
//         // if (token == null) {
//         //     setLoading(false);
//         //     return;
//         // }

//         setLoading(true);
//         setError(null);

        

//         const controller = new AbortController();
//         if (requestType === "POST") {
            
//             async function post() {
//                 const token = await GetToken();

                
                
//                 if (!asPerson) {
//                     try {
//                         const RESPONSE = await fetch(url, {
//                             method: "POST",
//                             headers: {"Authorization": "Bearer " + token},
//                             // body: fields,
//                             signal: controller.signal
//                         });
            
//                         const DATA = await RESPONSE.json();
//                         setData(DATA)
//                     } catch (err) {
//                         setError(err)
//                     } finally {
//                         setLoading(false)
//                     }
            
//                 } else {
//                     try {
//                         const RESPONSE = await fetch(url, {
//                             method: "POST",
//                             headers: {"Authorization": "Bearer " + token,
//                                 "X-Person-Token": personToken
                    
//                             },
//                             // body: fields,
//                             signal: controller.signal
//                         })
    
//                         const DATA = await RESPONSE.json();
//                         setData(DATA);
//                     } catch (err) {
//                         setError(err)
//                     } finally {
//                         setLoading(false)
//                     }
//                 }


//             }

//             post()


            
//         } else if (requestType === "GET") {
            
//             async function get() {
//                 const token = await GetToken();
//                 console.log(token)
                
//                 if (!asPerson) {
//                     try {
//                         const RESPONSE = await fetch(url, {
//                             method: "GET",
//                             headers: {"Authorization": "Bearer " + token},
//                             signal: controller.signal
//                         });
            
//                         const DATA = await RESPONSE.json();
//                         setData(DATA)
//                     } catch (err) {
//                         setError(err)
//                     } finally {
//                         setLoading(false)
//                     }
            
//                 } else {
//                     try {
//                         const RESPONSE = await fetch(url, {
//                             method: "GET",
//                             headers: {"Authorization": "Bearer " + token,
//                                 "X-Person-Token": personToken
                    
//                             },
//                             signal: controller.signal
//                         })
    
//                         const DATA = await RESPONSE.json();
//                         setData(DATA);
//                     } catch (err) {
//                         setError(err)
//                     } finally {
//                         setLoading(false)
//                     }
//                 }


//             }

//             get()

            

//         }

//         return () => {
//             controller.abort();
//         }; 

//     }, [dep, url, requestType, asPerson])
    
//     return { data,loading: fetchLoading, error: fetchError}
// }

function useFetch({
    url,
    requestType = "GET",
    dep,
    asPerson = false,
    body = null,
}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const personToken = sessionStorage.getItem("x-person-token");

    useEffect(() => {
        if (!url) return;

        const controller = new AbortController();
        let cancelled = false;

        setLoading(true);
        setError(null);

        enqueueRequest(async () => {
            try {
                const baseToken = await GetToken({
                    signal: controller.signal,
                });

                const headers = {
                    Authorization: `Bearer ${baseToken}`,
                };

                if (asPerson && personToken) {
                    headers["X-Person-Token"] = personToken;
                }

                if (requestType === "POST") {
                    headers["Content-Type"] = "application/json";
                }

                const response = await fetch(url, {
                    method: requestType,
                    headers,
                    body:
                        requestType === "POST" && body
                            ? JSON.stringify(body)
                            : undefined,
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error(`Request failed (${response.status})`);
                }

                const result = await response.json();

                if (!cancelled) {
                    setData(result);
                }
            } catch (err) {
                if (!cancelled && err.name !== "AbortError") {
                    setError(err);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        });

        return () => {
            cancelled = true;
            controller.abort();
        };
    }, [url, requestType, dep, asPerson, personToken]);

    return {
        data,
        loading,
        error,
    };
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