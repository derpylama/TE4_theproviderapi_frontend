//React imports
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Component imports
import './App.css'
import './index.css'
import './blog/blog.css'

import Topbar from './topbar/topbar'

import {Blog, BlogMain, BlogPost} from './blog/blog'


import SideBar from './sidebar/sidebar'



import "./login_page/login.jsx"

//Function / hook imports
import { useAuthToken, VerifyToken, useVerify } from "./api/token_handler.js"
import { UserLogin } from './api/user_handler.js'
import { GetAll, useFetch } from './api/content_handler.js'
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
      </div>

    </>
  )
}



function  App() {
    
    const [userToken, SetUserToken] = useState()
    const { token, authLoading, authError} = useAuthToken() 
    const [contentArray, setContentArray] = useState([])
    const {data, loading, error} = useFetch({
        url: "https://tp1.api.ntigskovde.se/api/blog/get-all",
        requestType: "GET",

        asPerson: false,
        

    })

    useEffect(() => {

        if (data == null) return;
        console.log(data.blogs)
        setContentArray(data.blogs)
        
    }, [data])


    useEffect(() => {
        if (token == null) return;

        


        async function run() {

            // await VerifyToken({ token, signal: controller.signal });
            
            // var content = await GetAll({ token, userToken, content:"blog", signal: controller.signal });
            
            // if (content.blogs != undefined) {
            //     setContentArray(content.blogs)
            // }
        }
    
        run();
    }, [token]);


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlogMainPage blogs={contentArray}></BlogMainPage>}></Route>
        <Route path='/wiki' element={<BlogMainPage></BlogMainPage>}></Route>
        <Route path='/blog/:id' element={<BlogPageFunc></BlogPageFunc>}></Route>
        <Route path='/login' element={<LoginPage SetUserToken={SetUserToken} token={token}></LoginPage>}></Route>
      </Routes>
    </BrowserRouter>



  )
}

export default App
