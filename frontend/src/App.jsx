import React from 'react'
import { Toaster } from 'react-hot-toast';
import Home from './home/Home'
import { Navigate, Route,Routes } from 'react-router-dom'
import Courses from'./courses/Courses';
import SignUp from './components/SignUp';
import { useAuth } from './context/AuthProvider';

const App = () => {
  const [authUser,setAuthUser]=useAuth();
  return (
    <>
   <div className='dark:bg-slate-900 dark:text-white '>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={authUser?<Courses/>:<Navigate to="/Signup"/>}/>
    <Route path="/Signup" element={<SignUp/>}/>

    </Routes>
    <Toaster/>
   </div>
    </>
  )
}

export default App