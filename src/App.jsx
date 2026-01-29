import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topbar from './topbar/topbar'

import {Blog, BlogMain} from './blog/blog'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function BlogMainPage() {
  return (
    <>
      <Topbar></Topbar>
      <div className='content-container'>
        <BlogMain></BlogMain>
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



import SideBar from './sidebar/sidebar'

import { useAuthToken, VerifyToken } from "./api/token_handler.js"
import { UserLogin } from './api/user_handler.js'
import { CONTENT, GetAll } from './api/content_handler.js'


function  App() {
    
    //const [token, SetToken] = useState(null)
    const [userToken, SetUserToken] = useState("")
    const { token, loading, error} = useAuthToken() 


    useEffect(() => {

    }, []);

    useEffect(() => {
        if (!token) return;

        
        async function run() {
            VerifyToken({ token });
            var contentType = CONTENT.WIKI
            
            var content = await GetAll({ token, userToken, CONTENT:contentType });
            console.log()
            
            UserLogin({
                SetUserToken: SetUserToken,
                username: "admin",
                password: "admin",
                token
            });
        }
    
        run();
    }, [token]);


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlogMainPage></BlogMainPage>}></Route>
        <Route path='/wiki' element={<BlogMainPage></BlogMainPage>}></Route>
        <Route path='/blog/:id' element={<BlogPageFunc></BlogPageFunc>}></Route>
      </Routes>
    </BrowserRouter>



  )
}

export default App
