import { useState } from "react";
import Topbar from "../topbar/topbar";
import { useFetch } from "../api/content_handler";
import { useParams } from "react-router-dom";
import { GetToken } from "../api/token_handler";

function Editor() {
    const {id} = useParams()
    const [textContent, setTextContent] = useState("")
    const [titleContent, setTitleContent] = useState("")

    return (
        <>
        <Topbar></Topbar>
        <div className='content-container background'>
            
            <div className='blog-post-container'>
                <div className='blog-post-header'>
                    <input type="text" name="" id="title-input" placeholder="titel" value={titleContent} onChange={(e) => setTitleContent(e.target.value)}/>
                </div>
                <div className='blog-post-info-container'>
                </div>

                <div className='blog-post-text-container text-background'>
                    <textarea name="" id="" rows={30} cols={70} value={textContent} onChange={(e) => setTextContent(e.target.value)}></textarea>
                </div>

                <button onClick={() => Save({textContent, titleContent, id})}>Spara</button>
                <button>Avbryt</button>
            </div>

        </div>
        </>
    )
}

async function Save({textContent, titleContent, id}) {
    try {
        const personToken = sessionStorage.getItem("x-person-token")
        const token = await GetToken()

        const response = await fetch("https://tp1.api.ntigskovde.se/api/blog/post/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
                "X-Person-Token": personToken
            },
            body: JSON.stringify({
                blogID: id,
                fields: {
                    title: titleContent,
                    content: textContent
                }
            })
        });

        const data = await response.json()
        console.log("Saved:", data)
        alert("Blog saved successfully!")
    } catch (err) {
        console.error("Error saving blog:", err)
        alert("Failed to save blog.");
    }
};



export default Editor