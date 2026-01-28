

async function UserLogin({SetUserToken, username, password, token}) {
    var passwordHash = await hashPassword(password)

    fetch("https://tp1.api.ntigskovde.se/api/people/cred/login", {
        method: "POST",
        headers: {"Authorization": "Bearer " + token},
        body: JSON.stringify({
            username: username,
            passwordhash: passwordHash
        })
    }).then((response) => response.json())
    .then((data) => {
        console.log(data)
        SetUserToken(data.token)
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