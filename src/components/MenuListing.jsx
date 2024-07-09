import React from 'react'
import { useState } from 'react'

const MenuListing = (menu) => {

  const [showFullDescription, setShowFullDescription] = useState(false); //set to false to hide by default

  let description = menu.menu.menu.ingredient;

  if(!showFullDescription){
    description = description.substring(0,30) + '...';
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
            <div className="mb-6">
                <div className="text-gray-600 my-2">{menu.id}</div>
                <h3 className="text-xl font-bold">{menu.type}</h3>
            </div>
            <div className="mb-5">
                {description}
            </div>
            <button onClick={()=>setShowFullDescription((prevState)=>!prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">
                {showFullDescription ? 'Less' : 'More'}
            </button>
            <div className="text-indigo-500 mb-2">{menu.use}</div>
            <div className="border border-gray-100 mb-5"></div>
            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    {menu.menu.type}
                </div>
                <a href={`/menu/${menu.id}`} className="h-[36px] bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                    Read More
                </a>
            </div>
        </div>
    </div>
  )
}

export default MenuListing
