import { Outlet } from "react-router-dom"
import {useState} from "react"

import Navbar from "./components/navbar.tsx"
import Footer from "./components/footer.tsx"

import './App.css'

function App() {

  const [ loginToken, setLoginToken ] = useState(localStorage.getItem('LOGIN_TOKEN') || '');

  const context:any = {
    loginToken,
    setLoginToken
  };

  return (
    <>
      <Navbar context={ context }/>
      <Outlet context={ context } />
      <Footer />
    </>
  )
}

export default App

