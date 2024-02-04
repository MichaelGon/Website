import React from 'react'
import './Header.css'
import './Btn.css'

export default function BtnSliderLeft({direction, moveSlide}) {
  return (
    <button onClick={moveSlide} className="btn-slide-prev">
      &#171;
    </button>
  )
}