import './Header.css'
import './Btn.css'
import React, { useState } from 'react'
import images from './data'
import BtnSliderRight from './BtnSliderRight'
import BtnSliderLeft from './BtnSliderLeft'

const Scroller = () => {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
      if (slideIndex !== images.length) {
        setSlideIndex(slideIndex + 1)
      }
      else if (slideIndex === images.length) {
        setSlideIndex(1)
      }
    }
  
    const prevSlide = () => {
      if (slideIndex !== 1) {
        setSlideIndex(slideIndex - 1)
      }
      else if (slideIndex === 1) {
        setSlideIndex(images.length)
      }   
    }
    return (
      <div className='carousel'>
        {images.map((object, index) => {
          return (
            <div key={object.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
              <img src = {process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}/>
            </div>
          )
          }
        )}
        <BtnSliderRight moveSlide={nextSlide} direction={"next"}/>
        <BtnSliderLeft moveSlide={prevSlide} direction={"prev"}/>
      </div>
    )
}

export { Scroller }