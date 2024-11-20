import { Outlet } from "react-router-dom"

import Navbar from "./components/Navbar"

console.log("hello app.tsx");

function App() {
  return (
    <>
      <Navbar />
        <main>
          <Outlet />
        </main>
    </>
  )
}

export default App
