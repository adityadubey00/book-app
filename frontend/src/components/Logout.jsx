import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'


const Logout = (props) => {
    const setAuthUser=props.setAuthUser
   
    const handleLogout =()=>{
        try{
            setAuthUser(false)
            localStorage.removeItem("Users")
    
            toast.success("Logout successfully")
            window.location.reload
        } catch{
            toast.error("Error"+error.message)
        }
    }
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 rounded-md cursor-pointer'
        onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout