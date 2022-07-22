import React from 'react'
import { Link } from 'react-router-dom'
import './Noted.scss'

const Data = [
  {
    id: 1,
    Image:
      'https://res.cloudinary.com/osaz/image/upload/v1635606479/Book%20Home/Books/Authors/Marlon-james/90_dmpdzj.jpg',
    Name: 'Marlon James',
    Links: 'marlon-james',
  },
  {
    id: 2,
    Image:
      'https://res.cloudinary.com/osaz/image/upload/v1658090459/Book%20Home/Books/Authors/Maya%20angelou/maya_angelou_photo_by_deborah_feingold_corbis_entertainment_getty_533084708_buhc19.jpg',
    Name: 'Maya Angelou',
    Links: 'maya-angelou',
  },
  {
    id: 3,
    Image:
      'https://res.cloudinary.com/osaz/image/upload/v1635606551/Book%20Home/Books/Authors/Eliot-ackerman/ackerman-credit-muhsin-akgun_amftpp.jpg',
    Name: 'Elliot Ackerman',
    Links: 'elliot-ackerman',
  },
  {
    id: 4,
    Image:
      'https://res.cloudinary.com/osaz/image/upload/v1635606672/Book%20Home/Books/Authors/Dr-seuss/dr_seuss_1957_getty_images_3240530jpg_ps0ega.jpg',
    Name: 'Dr. Seuss',
    Links: 'dr-seuss',
  },
]
function Noted() {
  return (
    <div className='noted'>
      <div className='noted__head'>
        <div className='noted__head-one'>
          <h1>Noted Authors</h1>
          <p>Authors & their works are the center of everything we do</p>
        </div>
        <div className='noted__head-two'>
          <Link to='/books'>Full Authors List</Link>
        </div>
      </div>
      <div className='noted__wrap'>
        {Data.map((note) => {
          return (
            <div key={note.id} className='noted__wrap-card'>
              <div className='noted__wrap-card-img'>
                <Link to={`/author/${note.Links}`}>
                  <img src={note.Image} alt='' />
                </Link>
              </div>
              <Link to={note.Links}>
                <h1>{note.Name}</h1>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Noted
