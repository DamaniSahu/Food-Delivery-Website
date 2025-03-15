import React from 'react'
import { ImBin } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { decrement, increment, removeItem } from '../Redux/CardSlice';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Order = ({name, id, price, img, qty}) => {
    const dispatch = useDispatch();

    const removeFromCart= () => {
      dispatch(removeItem(id));
      setTimeout(() => toast.success("Dish removed from your cart"), 300);
    }

  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between items-center'>
      <div className='w-[60%] h-full flex gap-5'>
        <div className='w-[60%] h-full object-cover overflow-hidden'>
            <img src={img} alt={name}  
            className='object-cover rounded-lg'/>
        </div>
        <div className='w-[40%] h-full flex-col gap-3 flex justify-center items-center'>
            <div className='text-lg text-black font-semibold'> 
                {name}
            </div>
            <div 
            className='w-[100px] h-[40px] bg-slate-400 text-xl
            flex rounded-xl overflow-hidden shadow-xl font-bold text-green-600 border-green-300 border-2'>
                <button className='w-[30%] h-full bg-white flex justify-center items-center
                 hover:bg-green-200' onClick={()=>dispatch(decrement({id}))}>
                  -
                </button>
                <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center ' >
                  {qty}
                </span>
                <button className='w-[30%] h-full bg-white flex justify-center items-center
                 hover:bg-green-200' onClick={()=>dispatch(increment({id}))}>
                  +
                </button>
            </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-7'>
        <span className='text-xl font-semibold text-green-600'>
          Rs {price}/-
        </span>
        <ImBin className='w-[30px] h-[25px] text-red-600 cursor-pointer'
        onClick={removeFromCart}/>
      </div>
    </div>
  )
}

export default Order
