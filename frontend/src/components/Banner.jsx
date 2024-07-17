import React from 'react';
import Video from "../assets/video.mp4";

const Banner = () => {
  return (
    <>
      <div className='max-w-screen-2xl container overflow-x-hidden mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-[100vw] md:w-1/2 mt-12 md:mt-9 pt-12'>
          <div className='space-y-12'>
            <h1 className='text-3xl font-bold'>
              "A room without books is like a<br/>
              <span className='text-pink-500'>body without a soul.</span>" – Marcus Tullius Cicero
            </h1>
            <p className='text-xl'>
              Books are more than just words on a page; they are gateways to other worlds, experiences, and perspectives. Each book is an opportunity to explore, learn, and grow. Let your imagination soar and your knowledge expand with every page you turn.
            </p>

            <div className="">
              
              
              <input type="email" className="w-[80%] px-4 py-2 rounded-xl  dark:bg-slate-900 dark:text-white outline-none border " placeholder="Email" />
            </div>
          </div>
          <button className="btn btn-secondary mt-6">Get Started</button>
        </div>
        <div className='w-full md:w-1/2 mt-20 p-5'>
          <div className="container-fluid p-0 rounded-2xl shadow-pink-900">
            <video id="bannerVideo" autoPlay muted loop>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
