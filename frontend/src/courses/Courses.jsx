import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Course from '../components/Course'

const courses = () => {
  return (
<>
<Nav/>
<div className='min-h-screen'>
<Course/>

</div>
<Footer/>
</>  )
}

export default courses