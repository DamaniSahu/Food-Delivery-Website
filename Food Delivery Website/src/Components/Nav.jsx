import React, { useContext } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { dataContext } from '../Context/UserContext';
import foodItems from '../Food';
import { useSelector } from 'react-redux';

const Nav = () => {
  let { input,setInput,catego, setCatego, showCart, setShowCart } = useContext(dataContext)
  let cartItems = useSelector(state=>state.Card || []);
  console.log(cartItems);

  function handleSearch(e) {
    let value = e.target.value.toLowerCase();
    setInput(value);
  
    if (value === "") {
      setCatego(foodItems); // Agar input empty ho toh pura data dikhao
    } else {
      let filteredItems = foodItems.filter((item) => 
        item.food_name.toLowerCase().includes(value)
      );
      setCatego(filteredItems);
    }
  }


  return (
    <div className='w-full h-[100px] text-black flex justify-between items-center px-5 md:px-8'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
      <MdFastfood className='w-[30px] h-[30px] text-green-600 ' />
      </div>

      <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-2 rounded-md shadow-md md:w-[70%]'
      onSubmit={(e)=>e.preventDefault()}>
        <IoSearchSharp className='text-[20px] text-green-600 w-[20px] h-[20px]'/>
        <input type="text" placeholder='Search items here...'
        className='w-full outline-none text-[16px] md:text-[20px]' 
        onChange={handleSearch}  value={input}/>
      </form>
      
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center
       rounded-md shadow-xl relative cursor-pointer'
      onClick={()=> setShowCart(true)} >
        <span className='absolute text-green-600 top-0 right-3 font-semibold text-[16px]'>
        {cartItems?.length || 0}
        </span>
      <RiShoppingBag3Fill  className='w-[30px] h-[30px] text-green-600' />
      </div>
    </div>
  )
}

export default Nav
