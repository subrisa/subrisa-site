import React from 'react'
import Title from '../base/Title'

const About = ({cover, title, subtitle}) =>
  <div>
    <img src={cover.url} />
    <div className='wrapper' id='about'>
      <h2><Title text={title && title[0].text} color='white'/></h2>
      <p>{subtitle && subtitle[0].text}</p>
    </div>
    <style jsx>{`
      img {
        height: 100vh;
        width: 100%;
        object-fit: cover;
      }
      .wrapper {
        position: absolute;
        bottom: 1rem;
        left: 20px;
        right: 20px;
        color: white;
      }
      p {
        max-width: 600px;
        text-align: center;
        margin-left: auto; margin-right: auto;
      }
    `}</style>
  </div>

export default About
