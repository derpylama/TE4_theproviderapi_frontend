
async function GetToken() {
    fetch("https://tp1.api.ntigskovde.se/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username: "emilemil", password: "emilemil"})
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Fetched token:", data.token); 
        return data.token
    })
}

function VerifyToken({token}) {

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

export {GetToken, VerifyToken}