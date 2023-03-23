import React from 'react'
import '../../utils/style/_banner.scss'

const Banner = ({ imageURL, title, alt = '' }) => {
  return (
    <article className="banner">
      <img src={imageURL} alt={alt} className="banner-img" />
      <div>{title && <p className="banner-p">{title}</p>}</div>
    </article>
  )
}

export default Banner
