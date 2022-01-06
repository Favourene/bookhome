import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/navbar/Navbar'
import { commerce } from '../../lib/commerce'
import Loading from '../../Components/Loading/Loading'
import './Checkout.css'

function Checkout() {
  const [cart, setCart] = useState({})
  const [loading, setLoading] = useState(true)
  const fetchCart = async () => {
    const data = await commerce.cart.retrieve()
    return data
  }
    const emptyCart = async () => {
      const item = await commerce.cart.empty()
      setCart(item.cart)
    }
  useEffect(() => {
    const miracle = async () => {
      fetchCart().then((data) => {
        setCart(data)
        setLoading(false)
      })
    }
    miracle()
    document.title = 'Check Out - Book Home'
  }, [])
  return (
    loading?
    <Loading/>
    :
    <>
      <Navbar />
        <form className='checkOut'>
          <div className='checkOut-billings'>
            <h1>Billing Details</h1>
            <div className='billings-wrap'>
              <div className='billings-card'>
                <div>
                  <p>First Name</p>
                </div>
                <div>
                  <input required type='text' />
                </div>
              </div>
              <div className='billings-card'>
                <div>
                  <p>Last Name</p>
                </div>
                <div>
                  <input required type='text' />
                </div>
              </div>
              <div className='billings-card'>
                <div>
                  <p>Company Name</p>
                </div>
                <div>
                  <input required type='text' />
                </div>
              </div>
              <div className='billings-card'>
                <div>
                  <p>Postcode / ZIP</p>
                </div>
                <div>
                  <input required type='text' />
                </div>
              </div>
              <div className='billings-card long'>
                <div>
                  <p>Street Address</p>
                </div>
                <div>
                  <input required type='text' />
                </div>
              </div>
              <div className='billings-card'>
                <div>
                  <p>Town / City</p>
                </div>
                <div>
                  <input required type='text' />
                </div>
              </div>
              <div className='billings-card'>
                <div>
                  <p>State / Country</p>
                </div>
                <div>
                  <input required type='text' />
                </div>
              </div>
              <div className='billings-card'>
                <div>
                  <p>Phone</p>
                </div>
                <div>
                  <input required type='tel' />
                </div>
              </div>
              <div className='billings-card'>
                <div>
                  <p>Email</p>
                </div>
                <div>
                  <input required type='email' />
                </div>
              </div>
            </div>
          </div>
          <div className='checkOut-order'>
            <h1>Your Order</h1>
            <div className='order-wrap'>
              <div>
                <h2>Product</h2>
              </div>
              <div>
                <h2>Price</h2>
              </div>
            </div>
            {cart.line_items.map((item) => (
              <div className='order-wrap'>
                <div>
                  <li>
                    {item.name} &nbsp; X{item.quantity}
                  </li>
                </div>
                <div>
                  <li>&nbsp;${item.line_total.formatted}</li>
                </div>
              </div>
            ))}
            <div className='order-wrap'>
              <div>
                <h3>Total</h3>
              </div>
              <div>
                <h3>${cart.subtotal.formatted}</h3>
              </div>
            </div>
          </div>
          <div className='checkOut-button'>
            <Link to='/' onClick={emptyCart}>
              <button>Order Now</button>
            </Link>
          </div>
        </form>
    </>
  )
}

export default Checkout
