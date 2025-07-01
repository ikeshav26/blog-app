import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Feed from './pages/Feed'
import Create from './pages/Create'
import EditBlog from './pages/EditBlog'
import BlogPage from './pages/BlogPage'
import Contact from './pages/Contact'
import { useLocation } from 'react-router-dom'


const App = () => {
  const location = useLocation()
  return (
    <div className='bg-[#f9fafb]'>
      {location.pathname.includes('/login') || location.pathname.includes('/signup') ? null : <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/create-blog' element={<Create/>}/>
        <Route path='/edit-blog/:id' element={<EditBlog/>}/>
        <Route path='/blog/:id' element={<BlogPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
