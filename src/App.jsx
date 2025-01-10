import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/public"
import Dashboard from "./pages/admin"
import PublicLayout from "./layout/public"
import AdminLayout from "./layout/admin"
import AdminBooks from "./pages/admin/books"
import PublicBooks from "./pages/public/books"
import AdminGenres from "./pages/admin/genres"
import BookCreate from "./pages/admin/books/create.jsx"
import BookEdit from "./pages/admin/books/edit"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import Team from "./components/shared/Team/index.jsx"
import Contact from "./components/shared/Contact/index.jsx"




function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            {/* public Route */}
            <Route element={<PublicLayout/>}>
                <Route index element={<Home/>} />
                <Route path="books" element={<PublicBooks/>} />
                <Route path="teams" element={<Team/>} />
                <Route path="contacts" element={<Contact/>} />
            </Route>

            {/* Auth Routes */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            {/* admin Route */}
            <Route path="admin"element={<AdminLayout/>}>
                <Route index element={<Dashboard/>} />
                <Route path="books">
                    <Route index element={<AdminBooks/>}/>
                    <Route path="create" element={<BookCreate/>} />
                    <Route path="edit" element={<BookEdit/>} />
                </Route>
                
                <Route path="genres" element={<AdminGenres/>} />
            </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}         //ini yang tampil di web

export default App

