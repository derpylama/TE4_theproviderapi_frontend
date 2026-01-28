import { useState } from 'react'
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



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlogMainPage></BlogMainPage>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
