import React, { useState, useMemo  } from 'react'
import { createContext } from 'react'
import foodItems from '../Food'
export const dataContext = createContext()

const UserContext = ({children}) => {
  let [catego,setCatego] = useState(foodItems);
  let [input,setInput] = useState("");
  let [showCart, setShowCart] = useState(false)

  let data = useMemo(() => ({
    input,
    setInput,
    catego,
    setCatego,
    showCart,
    setShowCart
  }), [input, catego, showCart]);
  return (
      <dataContext.Provider value={data}>
      {children}
      </dataContext.Provider>
  )
}

export default UserContext
