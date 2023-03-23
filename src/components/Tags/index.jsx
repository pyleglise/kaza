import '../../utils/style/_tags.scss'

const Tags = ({ lodge }) => {
  return (
    <div className="tags">
      <>
        <h1 className="housing_title">{lodge.title}</h1>
        <p className="housing_location">{lodge.location}</p>
        <div className="tag_container">
          {lodge.tags.map((el, index) => (
            <span key={index} className="housing_tag">
              {el}
            </span>
          ))}
        </div>
      </>
    </div>
  )
}

export default Tags
