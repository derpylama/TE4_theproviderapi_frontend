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
    
    const [token, SetToken] = useState("")
    const [userToken, SetUserToken] = useState("")

    useEffect(() => {
        if (token == "") {
            GetToken({SetToken})
        }
        
    }, [])

    useEffect(() => {
        
        if (token != "") {
            console.log(token)
            VerifyToken({token})

            var username = "admin"
            var password = "admin"
            UserLogin({SetUserToken, username, password, token })
        }
    }, [token])
    



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
