import { useEffect, useState } from "react";
import { useFetch } from "./content_handler";
import { useAuthToken } from "./token_handler";

const BASE_URL = "https://tp1.api.ntigskovde.se/api/people/";

async function UserLogin({SetUserToken, username, password, token, signal}) {
    var passwordHash = await hashPassword(password)
    

    fetch( BASE_URL + "cred/login", {
        method: "POST",
        headers: {"Authorization": "Bearer " + token},
        body: JSON.stringify({
            username: username,
            passwordhash: passwordHash
        }),
        signal,
    }).then((response) => response.json())
    .then((data) => {
        SetUserToken(data.token)
        sessionStorage.setItem("x-person-token", data.token)
        sessionStorage.setItem("userID", data.personID)
        console.log(data)

    })

}

async function UserLogout({ token, userToken}) {
    fetch(BASE_URL + "cred/logout", {
        method: "POST",
        headers: {"Authorization": "Bearer " + token,
            "X-Person-Token": userToken

        },

    }).then((response) => response.json())
    .then((data) => {
        
    })
}

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
  
    const hashBuffer = await window.crypto.subtle.digest(
      "SHA-256",
      data
    );
  
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  
    return hashHex;
}



export { UserLogin }