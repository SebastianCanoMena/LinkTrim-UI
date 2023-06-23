import { Body } from "./components/Body/index"
import { Route, Router, Routes } from "react-router-dom"
import Login from "./components/Login/login"
import Layout from "./components/Layout/Layout"

function App() {

  return (

    
      <Layout>
    <Routes>
      
      <Route path="/" element={<Body/>} />
      <Route path="/login" element={<Login/>} />
      
    </Routes>
    </Layout>
 
  )
}

export default App
