import React, { useContext ,useEffect} from 'react'
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
import  {Toaster}  from 'react-hot-toast'
import { toast } from 'react-hot-toast'



const App = () => {
  const location = useLocation()
  const {user,setuser,navigate}=useContext(AppContext)

 useEffect(() => {
    const path = location.pathname + location.search;

    if (path.includes("success")) {
      toast.success("Login successful via Google OAuth!");
      setuser(true);
    } else if (path.includes("oauth=failure")) {
      toast.error("Google OAuth login failed. Please try again.");
    }
  }, [location, setuser, navigate]);


 console.log(user)
  
  return (
    <div className='bg-base-100'>
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
      <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: 'var(--color-base-100)',
      color: 'var(--color-base-content)',
      border: '1px solid var(--color-base-300)',
    },
    success: {
      style: {
        background: 'var(--color-success)',
        color: 'var(--color-success-content)',
      },
    },
    error: {
      style: {
        background: 'var(--color-error)',
        color: 'var(--color-error-content)',
      },
    },
  }}
/>
    </div>
  )
}

export default App
