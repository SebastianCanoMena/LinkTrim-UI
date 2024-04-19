import { Body } from "./components/Body/index"
import { Route, Router, Routes } from "react-router-dom"

import Layout from "./components/Layout/Layout"
import Account from "./components/AccountSign/Account"

function App() {

  return (

    
      <Layout>
    <Routes>
      
      <Route path="/" element={<Body/>} />
      <Route path="/login" element={<Account/>} />
      
    </Routes>
    </Layout>
 
  )
}

export default App
