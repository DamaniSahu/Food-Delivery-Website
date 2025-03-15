import React from 'react'
import { BiFoodTag } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/CardSlice';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card({id,name,type,img,price}) {
  let dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({id:id, name:name, price:price, img:img, qty:1}));
    toast.success("Dish added to your cart");
  }

  return (
    <div className='w-[300px] h-[400px] bg-white p-3 pb-0 rounded-lg flex flex-col gap-2 shadow-lg hover:border-2 border-green-400'>
      <div className='w-full h-[60%] overflow-hidden rounded-lg flex justify-center items-center'>
        <img src={img} alt={name} className='object-cover w-full h-full' />
      </div>

      <div className='text-xl font-semibold text-black'>
        {name}
      </div>

      <div className='w-full flex justify-between items-center'>
        <div className='text-lg font-bold text-green-500'>
          Rs {price}/-
        </div>
        <div className='flex justify-between items-center text-green-500 text-lg gap-2 font-semibold'>
          {type === "Veg"? <BiFoodTag className='text-green-500'/> : <BiFoodTag className='text-red-600'/>}
          <span className={type === "Veg"? "text-green-500" : "text-red-600"}>{type}</span>
      </div>
      </div>
      <button className='w-full p-3 bg-green-600 rounded-lg text-white
       hover:bg-green-400 transition-all' 
       onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  )
}

export default Card
