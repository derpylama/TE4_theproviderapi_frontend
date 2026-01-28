import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topbar from './topbar/topbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar></Topbar>
    </>
  )
}

export default App
