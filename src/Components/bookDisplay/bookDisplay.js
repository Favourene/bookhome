import React from 'react'
import './bookDisplay.scss'
import Special from '../special/special'
import Children from '../homecat/children'
import Biography from '../homecat/biography'

function bookDisplay() {
  return (
    <div className='bookDisplay'>
      <div className='bookDisplay__left'>
        <Special />
      </div>
      <div className='bookDisplay__right'>
        <Children />
        <div className='pull'>
          <Biography />
        </div>
      </div>
    </div>
  )
}

export default bookDisplay
