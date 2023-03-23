import React, { useState } from 'react'
import '../../utils/style/_carrousel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Carrousel = ({ lodge }) => {
  const [slide, setSlide] = useState(0)
  // const [loading, setLoading] = useState(true);
  const array = lodge.pictures
  const totalSlides = array.length
  // const src=array[slide]

  const handleClickLeft = () => {
    slide === 0 ? setSlide(totalSlides - 1) : setSlide(slide - 1)
  }

  const handleClickRight = () => {
    slide === totalSlides - 1 ? setSlide(0) : setSlide(slide + 1)
  }

  return (
    <div className="carrousel">
      <div
        className="carrousel_img"
        style={{ backgroundImage: `url(${array[slide]})` }}
      >
        <>
          {totalSlides !== 1 ? (
            <div className="icons_situation">
              <div>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="left"
                  onClick={handleClickLeft}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="right"
                  onClick={handleClickRight}
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
        {totalSlides !== 1 ? (
          <div className="slide-count">
            {slide + 1}/{totalSlides}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
export default Carrousel
