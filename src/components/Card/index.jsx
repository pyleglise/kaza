import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/style/_cards.scss'

const Card = ({ id, cover, title, location }) => {
  return (
    <Link to={`/lodging/${id}`}>
      <article className="article-cards">
        <img src={cover} alt="location" />
        <div className="layer-cards">
          <p className="p-cards">
            {title}
            <br />
            {location}
          </p>
        </div>
      </article>
    </Link>
  )
}
export default Card
