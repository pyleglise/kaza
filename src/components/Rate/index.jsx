import starColors from '../../assets/star-orange.png'
import starWhite from '../../assets/star-white.png'
import '../../utils/style/_rate.scss'
import React from 'react'

const Rate = ({ lodge }) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {stars.map((level, index) =>
        lodge.rating >= level ? (
          <img key={index} className="starColors" src={starColors} alt="" />
        ) : (
          <img key={index} className="starWhite" src={starWhite} alt="" />
        )
      )}
    </div>
  )
}

export default Rate
