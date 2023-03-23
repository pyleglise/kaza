import React from 'react'
import Collapse from '../components/Collapse'
import contentAbout from '../utils/content/About.json'
import background_apropos from '../assets/background-about.jpg'
import '../utils/style/_about.scss'

function About() {
  return (
    <>
      <div className="bg-container">
        <img
          className="bg-img"
          src={background_apropos}
          alt="Background About"
        />
      </div>
      <div className="collapses one-column">
        {contentAbout.map((collapse, index) => (
          <Collapse key={index} title={collapse.title}>
            <p>{collapse.description}</p>
          </Collapse>
        ))}
      </div>
    </>
  )
}

export default About
