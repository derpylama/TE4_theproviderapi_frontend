//React imports
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Component imports
import './App.css'
import './index.css'
import './blog/blog.css'

import Topbar from './topbar/topbar'

import {Blog, BlogMain, BlogPost} from './blog/blog'


import SideBar from './sidebar/sidebar.jsx'



import "./login_page/login.jsx"

//Function / hook imports
import { useAuthToken, VerifyToken } from "./api/token_handler.js"
import { UserLogin } from './api/user_handler.js'
import { CONTENT, GetAll } from './api/content_handler.js'
import LoginPage from './login_page/login.jsx'

function BlogMainPage({blogs}) {
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
  return (
    <>
      <Topbar></Topbar>
      <div className='content-container'>
        <Blog></Blog>
      </div>

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
    
    //const [token, SetToken] = useState(null)
    const [userToken, SetUserToken] = useState("")
    const { token, loading, error} = useAuthToken() 
    const [contentArray, setContentArray] = useState([])


    useEffect(() => {

    }, []);

    useEffect(() => {
        if (!token) return;

        const controller = new AbortController();

        async function run() {

            VerifyToken({ token });
            var contentType = CONTENT.BLOG
            
            var content = await GetAll({ token, userToken, CONTENT:contentType, signal: controller.signal });
            setContentArray(content.blogs)
            
            // UserLogin({
            //     SetUserToken: SetUserToken,
            //     username: "admin",
            //     password: "admin",
            //     token,
            //     signal: controller.signal
            // });
        }
    
        run();
    }, [token]);


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlogMainPage blogs={contentArray}></BlogMainPage>}></Route>
        <Route path='/wiki' element={<BlogMainPage></BlogMainPage>}></Route>
        <Route path='/blog/:id' element={<BlogPageFunc></BlogPageFunc>}></Route>
        <Route path='/post/:id' element={<BlogPostFunc></BlogPostFunc>}></Route>
        <Route path='/login' element={<LoginPage SetUserToken={SetUserToken} token={token}></LoginPage>}></Route>
      </Routes>
    </BrowserRouter>



  )
}

export default App
