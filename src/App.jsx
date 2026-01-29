import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topbar from './topbar/topbar'

import Blog from './blog/blog'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function BlogMainPage() {
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

import { GetToken, VerifyToken } from "./api/token_handler.js"
import { UserLogin } from './api/user_handler.js'

function  App() {
    
    const [token, SetToken] = useState(null)
    const [userToken, SetUserToken] = useState("")

    useEffect(() => {
      let cancelled = false;
  
      async function loadToken() {
        const t = await GetToken();
        if (!cancelled) {
            SetToken(t);
        }
      }
  
      loadToken();
  
      return () => {
        cancelled = true;
      };
    }, []);

    useEffect(() => {
      if (!token) return;
  
      VerifyToken({ token });
  
      UserLogin({
        SetUserToken: setUserToken,
        username: "admin",
        password: "admin",
        token
      });
    }, [token]);


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlogMainPage></BlogMainPage>}></Route>
        <Route path='/wiki' element={<BlogMainPage></BlogMainPage>}></Route>
      </Routes>
    </BrowserRouter>



  )
}

export default App
