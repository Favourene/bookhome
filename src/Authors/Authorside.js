import React from 'react'
import Authordata from '../Authors/AuthorsData'
import { Link } from 'react-router-dom'
import './Authorside.css'

function Authorside() {
 return (
   <div className='Authorside'>
     <h1>Authors</h1>
     <div>
       <ul>
         {Authordata.sort((a, b) => a.Author.localeCompare(b.Author)).map(
           (data) => {
             return (
               <div key={data.id}>
                 <Link to={data.AuthorLink}>
                   <li>
                     <p>{data.Author}</p>
                   </li>
                 </Link>
               </div>
             )
           }
         )}
       </ul>
     </div>
   </div>
 )
}

export default Authorside
