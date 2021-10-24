import React from 'react'
import Best from './bestdata'
import './book.css'
function best() {
  return (
    <div className='book__wrap'>
      {Best.map((best)=>{
       return (
         <div key={best.id} className='book__wrap-card'>
           <div className='book__wrap-card-img'>
             <a href={best.Link}>
               <img src={best.Image} alt='' />
             </a>
           </div>
           <a className='book__wrap-card-h1' href={best.Link}>
             <h1>{best.Title}</h1>
           </a>
           <a className='book__wrap-card-p' href={best.AuthorLink}>
             <p>{best.Author}</p>
           </a>
           <p className='book__wrap-card-price'>
             <span>{best.OldPrice}</span> ${best.Price}
           </p>
         </div>
       )
      })}
    </div>
  )
}

export default best
