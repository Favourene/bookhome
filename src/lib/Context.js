import React, { useState, useContext, useEffect } from 'react'
import { commerce } from './commerce'

const AppContext = React.createContext()

const Context = ({ children }) => {
  const [cart, setCart] = useState({})
  const fetchCart = async () => {
    const data = await commerce.cart.retrieve()
    return data
  }
  useEffect(() => {
    const miracle = async () => {
      fetchCart().then((data) => {
        setCart(data)
      })
    }
    miracle()
  }, [])
  return (
    <AppContext.Provider value={{ cart, setCart }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, Context }
