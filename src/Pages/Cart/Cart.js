import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/navbar/Navbar'
import { AiFillDelete } from 'react-icons/ai'
import { commerce } from '../../lib/commerce.js'
import './Cart.css'

function Cart() {
  const [cart, setCart] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchCart = async () => {
    const data = await commerce.cart.retrieve()
    return data
  }
  const updateQty = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity })
    setCart(item.cart)
  }
  const removeItem = async (productId) => {
    const item = await commerce.cart.remove(productId)
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
    document.title = 'Contact Us - Book Home'
  }, [])

  return (
    <>
      <Navbar totalItems={cart.total_items} />
      {!loading && (
        <section className='cartPage'>
          <section className='cart-hero'>
            <h1>Cart</h1>
          </section>
          <section className='cart-wrap'>
            {!cart.line_items.length ? (
              <h1 className='empty'>
                {' '}
                Hey, you don't have items in your shopping cart, start adding
                some
              </h1>
            ) : (
              <table className='cart-table'>
                <thead>
                  <tr>
                    <th>Remove</th>
                    <th>Photo</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.line_items.map((item) => (
                    <tr key={item.id}>
                      <td className='flex'>
                        <button
                          onClick={() => removeItem(item.id)}
                          className='delete'
                        >
                          <AiFillDelete />
                        </button>
                      </td>
                      <td>
                        <img src={item.image.url} alt='' />
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price.formatted}</td>
                      <td>
                        <div className='qty-btn'>
                          <button
                            onClick={() =>
                              updateQty(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <div className='qty'>{item.quantity}</div>
                        <div className='qty-btn'>
                          <button
                            onClick={() =>
                              updateQty(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                        </div>
                      </td>
                      <td>
                        <h1>${item.line_total.formatted}</h1>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
          <section className='cart-check'>
            <div className='cart-check-head'>
              <h1>CART TOTAL</h1>
            </div>
            <div className='cart-wrapper'>
              <div>
                <h3>Total</h3>
              </div>
              <div>
                <h2>${cart.subtotal.formatted}</h2>
                {!cart.line_items.length ? (
                  <></>
                ) : (
                  <Link to='/checkout'>
                    <button>Check Out</button>
                  </Link>
                )}
              </div>
            </div>
          </section>
        </section>
      )}
    </>
  )
}

export default Cart