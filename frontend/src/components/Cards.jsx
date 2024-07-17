import React from 'react'

function Cards(props) {

const item =props.item;

  return (
    <>
    <div className='mt-4 my-3 p-3 dark:bg-slate-900 dark:text-white '>
    <div className="card w-92 h-[350px] bg-base-100  shadow-xl hover:scale-105 duration-200 dark:text-black ">
  <figure>
    <img className='w-3/4 '
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer text-black hover:bg-pink-500 hover:text-white duration-200 px-2 py-1 ">Buy Now </div>
    </div>
  </div>
</div>
        
        </div>
        </>
  )
}

export default Cards;