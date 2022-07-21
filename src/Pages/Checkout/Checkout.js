import React, { useState, useEffect, CSSProperties } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import Navbar from '../../Components/navbar/Navbar'
import { commerce } from '../../lib/commerce'
import Loading from '../../Components/Loading/Loading'
import { useForm } from 'react-hook-form'
import ScaleLoader from 'react-spinners/ScaleLoader'
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import './Checkout.scss'
import Footer from '../../Components/footer/footer'

function Checkout({ notify }) {
  const history = useHistory()
  const [cart, setCart] = useState({})
  const [checkoutPage, setCheckoutPage] = useState('billing')
  const [loading, setLoading] = useState(true)
  const [checkoutToken, setcheckoutToken] = useState(null)
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('NG')
  const [shippingSubDivisions, setShippingSubDivisions] = useState([])
  const [shippingSubDivision, setShippingSubDivision] = useState('')
  const [shippingOptions, setshippingOptions] = useState([])
  const [shippingOption, setshippingOption] = useState({})
  const [paymentLoading, setPaymentLoading] = useState(false)
  const [billingData, setBillingData] = useState({
    selectedOption: {
      description: 'NIL',
      price: {
        formatted: '0',
      },
    },
  })
  const [order, setorder] = useState({
    status_payment: 'not_paid',
  })
  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: '#fff',
    height: '20',
  }
  const fetchCart = async () => {
    const data = await commerce.cart.retrieve()
    return data
  }
  const emptyCart = async () => {
    const item = await commerce.cart.empty()
    setCart(item.cart)
  }
  const refreshCart = async () => {
    const item = await commerce.cart.refresh()
    setCart(item)
  }
  const loginUser = async () => {
    const item = await commerce.customer
      .login('igbinosaiwinosa01@gmail.com', 'http://localhost:3000/cart')
      .then((token) => console.log(token))
    console.log(item)
  }
  const Submit = (e) => {
    e.preventDefault()
    alert('Purchased Succesfully')
    emptyCart()
    history.push('/')
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()
  // const { register: register2, handleSubmit: handleSubmit2 } = useForm()
  useEffect(() => {
    const miracle = async () => {
      fetchCart().then((data) => {
        setCart(data)
        setLoading(false)
      })
    }
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        })
        setcheckoutToken(token)
      } catch (error) {
        console.log(error)
        // if (error.data.error.message.includes('is empty')) {
        //   setTimeout(() => {
        //     window.location.replace('/books')
        //   }, 3000)
        // }
      }
    }
    // loginUser()
    miracle()
    if (cart.line_items) {
      generateToken()
    }
    document.title = 'Check Out - Book Home'
  }, [cart])
  const onOrder = (formData) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const selectedShipping = shippingOptions.find(
      (item) => item.id === formData.shipping_method
    )
    setBillingData({
      ...formData,
      county_state: shippingSubDivision,
      country: shippingCountry,
      selectedOption: selectedShipping,
    })
    setCheckoutPage('payment')
  }
  const handleCaptureCheckout = async (checkoutToken, newOrder) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutToken,
        newOrder
      )
      if (incomingOrder.status_payment === 'paid') {
        setCheckoutPage('confirm')
      }
      console.log(incomingOrder)
      setorder(incomingOrder)
      refreshCart()
    } catch (err) {
      console.log(err)
      notify(
        'error',
        `${err.data.error.message} please go back to the cart and try again`
      )
      // setTimeout(() => {
      //   window.location.replace('/cart')
      // }, 4000)
      setPaymentLoading(false)
    }
  }
  const fetchShippingCountries = async (checkToken) => {
    const response = await commerce.services.localeListShippingCountries(
      checkToken
    )
    return response
  }
  const fetchShippingSubDivision = async (division) => {
    const response = await commerce.services.localeListSubdivisions(division)
    return response
  }
  const fetchShippingOption = async (token, country, region = null) => {
    const response = await commerce.checkout.getShippingOptions(token, {
      country,
      region,
    })
    return response
  }
  useEffect(() => {
    if (checkoutToken) {
      fetchShippingCountries(checkoutToken.id).then((data) => {
        setShippingCountries(data.countries)
      })
      fetchShippingSubDivision(shippingCountry).then((data) => {
        setShippingSubDivisions(data.subdivisions)
      })
      fetchShippingOption(
        checkoutToken.id,
        shippingCountry,
        shippingSubDivision
      ).then((data) => {
        // setShippingSubDivisions(data.subdivisions)
        setshippingOptions(data)
      })
    }
  }, [cart])
  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  }
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
  const handleSubmitt = async (e, elements, stripe) => {
    e.preventDefault()
    if (!stripe || !elements) return
    const cardElement = elements.getElement(CardElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })

    if (error) {
      console.log(error)
      notify('error', error.message)
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: billingData.firstName,
          lastname: billingData.lastName,
          email: billingData.email,
          phone: billingData.phoneNumber,
        },
        shipping: {
          name: 'Primary',
          street: billingData.address,
          town_city: billingData.city,
          county_state: billingData.county_state,
          postal_zip_code: billingData.postalCode,
          country: billingData.country,
        },
        fulfillment: {
          shipping_method: billingData.shipping_method,
        },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
        extra_fields: {
          extr_ZM8X5nqLPopv4q: billingData.phoneNumber,
        },
      }
      handleCaptureCheckout(checkoutToken.id, orderData)
      setPaymentLoading(true)
    }
  }
  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      {checkoutPage === 'billing' && (
        <form className='checkOut' onSubmit={handleSubmit(onOrder)}>
          <div className='checkOut-billings'>
            <h1>Billing Details</h1>
            <div className='billings-wrap'>
              <div className='billings-card'>
                <div>
                  <p>First Name</p>
                </div>
                <div>
                  <input
                    required
                    type='text'
                    name='firstName'
                    {...register('firstName')}
                  />
                </div>
              </div>
              <div className='billings-card'>
                <div>
                  <p>Last Name</p>
                </div>
                <div>
                  <input
                    required
                    type='text'
                    name='lastName'
                    {...register('lastName')}
                  />
                </div>
              </div>
              <div className='billings-card'>
                <div>
                  <p>Phone</p>
                </div>
                <div>
                  <input
                    required
                    type='tel'
                    name='phoneNumber'
                    {...register('phoneNumber')}
                  />
                </div>
              </div>
              <div className='billings-card'>
                <div>
                  <p>Email</p>
                </div>
                <div>
                  <input
                    required
                    type='email'
                    name='email'
                    {...register('email')}
                  />
                </div>
              </div>
              <div className='billings-card long'>
                <div>
                  <p>Address</p>
                </div>
                <div>
                  <input
                    required
                    type='text'
                    name='address'
                    {...register('address')}
                  />
                </div>
              </div>
              <div className='billings-card'>
                <div>
                  <p>Town / City</p>
                </div>
                <div>
                  <input
                    required
                    type='text'
                    name='city'
                    {...register('city')}
                  />
                </div>
              </div>
              <div className='billings-card'>
                <div>
                  <p>Country</p>
                </div>
                <div>
                  <select
                    id=''
                    value={shippingCountry}
                    onChange={(e) => {
                      setShippingCountry(e.target.value)
                    }}
                  >
                    <option value=''>Select</option>
                    {Object.entries(shippingCountries).map((data) => (
                      <option value={data[0]}>{data[1]}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='billings-card'>
                <div>
                  <p>State / Province</p>
                </div>
                <div>
                  <select
                    name=''
                    id=''
                    value={shippingSubDivision}
                    onChange={(e) => {
                      setShippingSubDivision(e.target.value)
                    }}
                  >
                    <option value=''>Select</option>
                    {Object.entries(shippingSubDivisions).map((data) => (
                      <option value={data[0]}>{data[1]}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='billings-card'>
                <div>
                  <p>Postcode / ZIP</p>
                </div>
                <div>
                  <input
                    required
                    type='text'
                    name='postalCode'
                    {...register('postalCode')}
                  />
                </div>
              </div>
              <div className='billings-card'>
                <div>
                  <p>Shipping Options</p>
                </div>
                <div>
                  <select
                    name='shipping_method'
                    id=''
                    {...register('shipping_method')}
                  >
                    <option value=''>Select</option>
                    {shippingOptions.map((data) => (
                      <option value={data.id}>
                        {data.description} (${data.price.formatted})
                      </option>
                    ))}
                  </select>
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
              <div key={item.id} className='order-wrap'>
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
            <button type='submit'>Proceed</button>
          </div>
        </form>
      )}
      {checkoutPage === 'payment' && (
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({ elements, stripe }) => (
              <form
                className='checkOut'
                onSubmit={(e) => {
                  handleSubmitt(e, elements, stripe)
                }}
              >
                <div className='checkOut-billings'>
                  <h1>Payment Details</h1>
                  <p
                    style={{
                      color: '#333',
                      fontSize: '15px',
                      paddingBottom: '20px',
                    }}
                  >
                    Here is a dummy card to test with, no.:{' '}
                    <span style={{ color: 'orange' }}>4242 4242 4242 4242</span>
                    , expdate: any future date, cvv: any 3 digit number
                  </p>
                  <div className='billings-wrap '>
                    <div className='billings-card long stri'>
                      <CardElement id='card-element' options={cardStyle} />
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
                    <div key={item.id} className='order-wrap'>
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
                      <li>
                        {billingData.selectedOption.description} Shipping Fee
                      </li>
                    </div>
                    <div>
                      <li>
                        &nbsp;${billingData.selectedOption.price.formatted}
                      </li>
                    </div>
                  </div>
                  <div className='order-wrap'>
                    <div>
                      <h3>Total</h3>
                    </div>
                    <div>
                      <h3>
                        $
                        {`${
                          parseFloat(cart.subtotal.formatted) +
                          parseFloat(billingData.selectedOption.price.formatted)
                        }`}
                      </h3>
                    </div>
                  </div>
                  <div className='order-wrap'>
                    <div
                      onClick={() => {
                        setCheckoutPage('billing')
                        setPaymentLoading(false)
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <h3>Go Back</h3>
                    </div>
                  </div>
                </div>
                <div className='checkOut-button'>
                  {paymentLoading ? (
                    <div className='buttonFake'>
                      Processing payment{' '}
                      <ScaleLoader
                        color='#fff'
                        cssOverride={override}
                        className='spim'
                      />
                    </div>
                  ) : (
                    <button type='submit'>Pay Now</button>
                  )}
                </div>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      )}
      {checkoutPage === 'confirm' && (
        <div className='confirm'>
          <div className='wrapper'>
            <div>
              <img
                src='https://res.cloudinary.com/osaz/image/upload/v1658276543/Book%20Home/undraw_order_confirmed_re_g0if_wvmagr.svg'
                alt=''
              />
            </div>
            <div>
              <h2>Order Confirmed</h2>
              <p>Please check your mail for your order reciept</p>
              <button
                onClick={() => {
                  window.location.replace('/books')
                }}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default withRouter(Checkout)
