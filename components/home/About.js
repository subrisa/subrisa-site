import React from 'react'
import Title from '../base/Title'

const About = () =>
  <div>
    <img src='https://subrisa.com/static/bg.jpg' />
    <div className='wrapper'>
      <h2><Title text='Nosotros' color='white'/></h2>
      <p>Lorem Ipsum</p>
    </div>
    <style jsx>{`
      .wrapper {
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        color: white;
      }
    `}</style>
  </div>

export default About
