import React from 'react'
import Title from '../base/Title'

const About = () =>
  <div className='root'>
    <h2><Title text='Contacto' color='red' /></h2>
    <p>Deixe seu email </p>
    <input type='text' />
    <style jsx>{`
      .root {
        margin: 20px 0
      }
    `}</style>
  </div>

export default About
