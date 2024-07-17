import React from 'react';
import Nav from '../components/Nav';
import FreeBook from '../components/FreeBook';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
const Home = () => {
  return (
<>
<div className='overflow-x-hidden w-[100vw]'>
      <Nav/>
      <Banner/>
    <FreeBook/>
    <Footer/>
    </div>
</>  )
}

export default Home