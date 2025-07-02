import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
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
import { AppContext } from './context/AppContext'


const App = () => {
  const location = useLocation()
  const {user}=useContext(AppContext)
  
  return (
    <div className='bg-[#f9fafb]'>
      {location.pathname.includes('/login') || location.pathname.includes('/signup') ? null : <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={user?<Profile/>:<Navigate to='/login'/>}/>
        <Route path='/feed' element={user?<Feed/>:<Navigate to='/login'/>}/>
        <Route path='/create-blog' element={user?<Create/>:<Navigate to='/login'/>}/>
        <Route path='/edit-blog/:id' element={user?<EditBlog/>:<Navigate to='/login'/>}/>
        <Route path='/blog/:id' element={user?<BlogPage/>:<Navigate to='/login'/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
