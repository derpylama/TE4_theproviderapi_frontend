const BASE_URL = "https://tp1.api.ntigskovde.se/api/";
const CONTENT = {
    WIKI: "wiki",
    BLOG: "blog",
    USERS: "users"
}

async function GetAll( {token, userToken, CONTENT, signal } ) {
    console.log()
    const response = await fetch(BASE_URL + CONTENT + "/get-all", {
        method: "GET",
        headers: {"Authorization": "Bearer " + token,
        },
        signal
    })

    
    return await response.json();
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

export { GetAll, CONTENT }