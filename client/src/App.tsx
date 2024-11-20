import { Outlet } from "react-router-dom"
import {useState} from "react"

import NavBar from "./components/navbar"
import Footer from "./components/footer"

import './App.css'

console.log("hello app.tsx");

function App() {

  const [ loginToken, setLoginToken ] = useState(localStorage.getItem('LOGIN_TOKEN') || '');

  const context:any = {
    loginToken,
    setLoginToken
  };

  return (
    <>
      <NavBar context={ context }/>
      <Outlet context={ context } />
      <Footer />
    </>
  )
}

export default App

