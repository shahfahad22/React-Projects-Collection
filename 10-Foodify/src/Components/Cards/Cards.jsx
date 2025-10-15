import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from "../../Components/Button/Button"

const Cards = ({image,name,price}) => {
  return (
    <div className='bg-zinc-100 p-6 rounded-xl'>
        {/* Card Icons */}
        <div className='flex justify-between text-2xl'>
            <span className='text-3xl text-zinc-300 cursor-pointer'><FaHeart /></span>
            <button className='bg-gradient-to-b from-orange-400 to-orange-500 cursor-pointer text-white text-xl px-3 py-3 rounded-lg'><FaPlus /></button>
        </div>
        {/* Card Image */}
        <div className='w-full h-50 '>
            <img src={image} className='w-full h-full object-contain' loading="lazy"  />
        </div>
        { /* Card Content */}
        <div className='text-center'>
            <h3 className='text-2xl font-semibold '>{name}</h3>
            <p className='text-2xl font-bold mt-4 mb-3'>${price.toFixed(2)}</p>
        <Button content="Shop Now" />
        </div>
    </div>
  )
}

export default Cards