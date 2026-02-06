//React imports
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'

// Component imports
import './App.css'
import './index.css'
import './blog/blog.css'

import Topbar from './topbar/topbar'
 
import {Blog, BlogMain, BlogPost, BlogPostContent} from './blog/blog'


import SideBar from './sidebar/sidebar.jsx'



import "./login_page/login.jsx"

//Function / hook imports
import { useAuthToken, VerifyToken, useVerify } from "./api/token_handler.js"
import { UserLogin } from './api/user_handler.js'
import { GetAll, useFetch } from './api/content_handler.js'
import LoginPage from './login_page/login.jsx'
import ProtectedRoute from './protected_route/protected_route.jsx'
import PermissionButton from './buttons/Permission_button.jsx'
import Editor from './editor/editor.jsx'

function BlogMainPage() {
    const [blogs, setBlogs] = useState([])

    const personToken = sessionStorage.getItem("x-person-token")
    var isLoggedIn = (personToken != undefined || personToken != "") ? true : false 

    const {data, loading, error} = useFetch({
        url: "https://tp1.api.ntigskovde.se/api/blog/get-all",
        requestType: "GET",

        asPerson: isLoggedIn,
        

    })

    useEffect(() => {
        if (loading) {return}
        setBlogs(data.blogs)
        console.log(data)
    },[data])

  return (
    <>
      <Topbar></Topbar>
      <div className='content-container blog-background'>
        <BlogMain blogs={blogs}></BlogMain>
      </div>

    </>
  )
}
function BlogPageFunc() {
    const [blogPosts, setBlogPosts] = useState()
    const {id} = useParams()
    const userID = sessionStorage.getItem("userID")


    const {data, loading, error} = useFetch({
        url: "https://tp1.api.ntigskovde.se/api/blog/post/get-all?blogID=" + id,
        requestType: "GET",

        asPerson: true,
    })
    
    const {data: perms, loading: permLoading, error:permError} = useFetch({
        url: "https://tp1.api.ntigskovde.se/api/blog/perm/get-all?id=" + id,
        requestType: "GET",

        asPerson: true,
    })

    const {data: blogData, loading: blogLoading, error: blogError} = useFetch({
        url: "https://tp1.api.ntigskovde.se/api/blog/get?id=" + id,
        requestType: "GET",

        asPerson: true,
    })

    const isLoading = blogLoading || permLoading || loading;
    const hasError = blogError || permError || error;

    useEffect(() => {
        console.log(blogData)
    }, [blogData])

    useEffect(() => {
        console.log(perms)
    }, [perms])

    useEffect(() => {
        if (loading) {return}
        
        setBlogPosts(data.posts)
    },[data])

  return (
    <>
      <Topbar></Topbar>
      <div className='content-container'>

        {(blogPosts != null) ? <BlogPost posts={blogPosts}></BlogPost> : <h3>Blog not found</h3>}

      </div>
        <PermissionButton
                    userID={userID}
                    text={"Skapa nytt inlägg"}
                    ownerID={blogData?.fields?.owner}
                    blogID={id}
                    isLoading={isLoading}
                    hasError={hasError}
                    perms={perms?.perms || []}
                />
    </>
  )
}

function BlogPostFunc() {
  return (
    <>
      <Topbar></Topbar>
      <div className='content-container background'>
        <BlogPost></BlogPost>
        <SideBar></SideBar>
      </div>

    </>
  )
}


function  App() {
    const [userToken, setUserToken] = useState("");

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlogMainPage></BlogMainPage>}></Route>
        <Route path='/login' element={<LoginPage SetUserToken={setUserToken}></LoginPage>}></Route>
        
        <Route element={<ProtectedRoute></ProtectedRoute>}>
            <Route path='/wiki' element={<BlogMainPage></BlogMainPage>}></Route>
            <Route path='/blog/:id' element={<BlogPageFunc></BlogPageFunc>}></Route>
            <Route path='/blog/post/:id' element={<BlogPostContent></BlogPostContent>}></Route>
            <Route path='/blog-editor/:id' element={<Editor></Editor>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>



  )
}

export default App
