import React , {useState} from 'react'
import './display.css'
import Best from './best'
import Latest from './latest'
import Sale from './sale'

function Display() {
  const [book, setBook] = useState('Best')
 return (
   <div className='book'>
     <div className='book__header'>
       <div className='book__header-head'>
         <h1>Books</h1>
         <p>The most recent books that arrived in our Bookshop</p>
       </div>
       <div className='book__nav'>
         <ul className='book__nav-ul'>
           <li
             onClick={() => {
               setBook('Best')
             }}
             className={`${book === 'Best' ? 'active' : ''}`}
           >
             BEST SELLING
           </li>
           <li
             onClick={() => {
               setBook('Latest')
             }}
             className={`${book === 'Latest' ? 'active' : ''}`}
           >
             LATEST
           </li>
           <li
             onClick={() => {
               setBook('Sale')
             }}
             className={`${book === 'Sale' ? 'active' : ''}`}
           >
             SALE
           </li>
         </ul>
       </div>
     </div>
     {book === 'Best' && <Best />}
     {book === 'Latest' && <Latest />}
     {book === 'Sale' && <Sale />}
   </div>
 )
}

export default Display
