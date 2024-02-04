import React from 'react'
import './Header.css'
import './Btn.css'

export default function BtnSliderRight({direction, moveSlide}) {
  return (
    <button onClick={moveSlide} className="btn-slide-next">
      &#187;
    </button>
  )
}