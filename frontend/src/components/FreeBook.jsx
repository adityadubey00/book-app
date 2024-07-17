import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

import axios from 'axios';

const FreeBook = () => {
  const [book,setBook]=useState([])
  useEffect(()=>{
      const getBook = async()=>{
          try{
       const res= await axios.get("/book");
       setBook(res.data.filter((data)=>data.category==="Free"))

          }
          catch(error){
              console.log(error);

          }
      };
      getBook();
  })

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
  <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 dark:bg-slate-900 dark:text-white px-4 mt-7 md:mt-5'>
    <h1 className='font-semibold text-xl pb-2'>Free Offered Course </h1>
    <p>"There is no friend as loyal as a book. A book is a dream that you hold in your hands, a journey you embark upon without leaving your chair."</p>
  </div>
  <div>
  <Slider className='mx-auto md:px-20 px-4 mt-7 md:mt-5' {...settings}>
        {book.map((item)=>(
          <Cards  item={item} key={item.id} />
        ))
}
      </Slider>
  </div>
    </>
  )
}

export default FreeBook