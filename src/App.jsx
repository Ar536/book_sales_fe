import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/public"
import Dashboard from "./pages/admin"
import PublicLayout from "./layout/public"
import AdminLayout from "./layout/admin"
import AdminBooks from "./pages/admin/books"
import PublicBooks from "./pages/public/books"
import AdminGenres from "./pages/admin/genres"
import AdminAuthors from "./pages/admin/authors"
import AdminPaymentMethods from "./pages/admin/payment_methods"
import BookCreate from "./pages/admin/books/create.jsx"
import GenreCreate from "./pages/admin/genres/create.jsx"
import BookEdit from "./pages/admin/books/edit"
import GenreEdit from "./pages/admin/genres/edit"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import Team from "./components/shared/Team/index.jsx"
import Contact from "./components/shared/Contact/index.jsx"
import AuthorCreate from "./pages/admin/authors/create.jsx"
import AuthorEdit from "./pages/admin/authors/edit.jsx"
import PmethodCreate from "./pages/admin/payment_methods/create.jsx"
import Pmethodedit from "./pages/admin/payment_methods/edit.jsx"




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
                <Route path="genres" >
                    <Route index element={<AdminGenres/>} />
                    <Route path="create" element={<GenreCreate/>} />
                    <Route path="edit" element={<GenreEdit/>} />
                </Route>
                <Route path="authors" >
                    <Route index element={<AdminAuthors/>} />
                    <Route path="create" element={<AuthorCreate/>} />
                    <Route path="edit" element={<AuthorEdit/>} />
                
                </Route>
                <Route path="payment_methods" >
                    <Route index element={<AdminPaymentMethods/>} />
                    <Route path="create" element={<PmethodCreate/>} />
                    <Route path="edit" element={<Pmethodedit/>} />
                
                </Route>
                <Route path="books">
                    <Route index element={<AdminBooks/>}/>
                    <Route path="create" element={<BookCreate/>} />
                    <Route path="edit" element={<BookEdit/>} />
                </Route>
                
            </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}         //ini yang tampil di web

export default App

