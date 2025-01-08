import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/public/home"
import Dashboard from "./pages/admin"




function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/admin" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}         //ini yang tampil di web

export default App

