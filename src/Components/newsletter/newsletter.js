import React from 'react'
import './newsletter.css'

function newsletter() {
 return (
   <div className='newsletter'>
     <div className='newsletter__wrap'>
       <h1>Stay With Us Always</h1>
       <p>
         Subscribe to our newsletters now and stay up-to-date with new
         collections, the latest lookbooks and exclusive offers.
       </p>
       <form action=''>
         <input placeholder="E-mail Address" type='email' required={true}/>
         <button>SUBSCRIBE</button>
       </form>
     </div>
   </div>
 )
}

export default newsletter
