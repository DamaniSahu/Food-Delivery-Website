import React, { useContext } from 'react'
import Nav from '../Components/Nav'
import categories from '../Category'
import Card from '../Components/Card'
import foodItems from '../Food'
import { dataContext } from '../Context/UserContext'
import { ImCross } from "react-icons/im";
import { useSelector } from 'react-redux'
import Order from '../Components/Order'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  let {catego, setCatego, input, setInput, showCart, setShowCart } = useContext(dataContext);
  let cartItems = useSelector(state=>state.Card || [])
  let subTotal = cartItems.reduce((total, item)=>total+item.qty*item.price,0);
  let deliveryFee = 20;
  let taxes = subTotal*0.5/100;
  let total = Math.round(subTotal + deliveryFee + taxes);

  // function filter(category) {
  //   if(category === "All"){
  //     setCatego(foodItems);
  //   }else{
  //     let newList = foodItems.filter((item) => (
  //       item.food_category === category
  //     ))
  //     setCatego(newList)
  //   }
  // }

  const filter = (category) => {
    setCatego(category === "All" ? foodItems : foodItems.filter(item => item.food_category === category));
  };

  return (
    <div className='w-full min-h-screen bg-slate-200'>
      <Nav/>
      {!input ? 
      <div className='flex justify-center items-center flex-row flex-wrap gap-5  w-[100%]'>
        {categories.map((item)=>{
          return <div className='bg-white w-[120px] h-[130px] flex flex-col items-center justify-center
            text-gray-600 text-[15px] font-semibold p-4 gap-2 rounded-lg shadow-xl hover:bg-green-200
            cursor-pointer transition-all duration-200 '
            onClick={()=>filter(item.name)} key={item.name}>
              {item.icon}
              {item.name}
          </div>
        })}
      </div> : null}
      
      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
        {catego.length >1 ? 
          (catego.map((item) => (
            <Card 
            key={item.id}
            id={item.id}
            name={item.food_name}
            type={item.food_type}
            img={item.food_img}
            price={item.price}
            />
          ))) : (
            <div className='text-green-600 text-lg pt-8 font-semibold'>
              Not Found!
            </div>
          )}
      </div>

      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 overflow-auto
     text-green-600 font-semibold text-[18px] transition-all duration-500 flex flex-col items-center
      ${showCart?"translate-x-0":"translate-x-full"}`}>
        <header className='w-full flex justify-between items-center'>
          <span>Order Items</span>
          <ImCross  className='cursor-pointer hover:text-gray-950' 
          onClick={() => setShowCart(false)}/>
        </header>

        {cartItems.length > 0 ? 
        <div className='flex flex-col justify-center items-center'>
          <div className='w-full mt-9 flex-col gap-8'>
            {cartItems.map((item)=> (
              <Order
              key={item.id}
              name={item.name} 
              price={item.price} 
              img={item.img} 
              id={item.id} 
              qty={item.qty}/>
            ))}
          </div>

          <div className='w-full border-t-2 border-b-2 border-gray-700 mt-7 flex flex-col p-5
            text-md text-gray-700 font-semibold'>
            <div className='w-full flex justify-between items-center '> 
              <span>Subtotal</span>
              <span className='text-green-600'>
                Rs {subTotal}/-
              </span>
            </div>

            <div className='w-full flex justify-between items-center '>
              <span>Delivery Fee</span>
              <span className='text-green-600'>
                Rs {deliveryFee}/-
              </span>
            </div>

            <div className='w-full flex justify-between items-center '>
              <span>Taxes</span>
              <span className='text-green-600'>
                Rs {taxes}/-
              </span>
            </div>
          </div>

          <div className='w-full flex justify-between items-center pl-5 pr-5 text-md text-gray-700
          font-semibold pb-5 pt-2'>
            <span>Total</span>
            <span className='text-green-600'>
              Rs {total}/-
            </span>
          </div>

          <button className='w-[80%] p-3 bg-green-600 rounded-lg text-white
          hover:bg-green-400 transition-all' onClick={()=>{toast.success("Your Order Placed")}}>
            Place Order
          </button>
        </div> : (
        <div className='text-green-600 text-xl font-semibold pt-9 text-center' >
          Empty Cart!
        </div>)}
      </div>
    </div>
  )
}

export default Home
