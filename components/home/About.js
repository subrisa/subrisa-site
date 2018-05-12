import React from 'react'
import Title from '../base/Title'

const About = () =>
  <div>
    <img src='https://subrisa.com/static/bg.jpg' />
    <div className='wrapper'>
      <h2><Title text='Nuestra Brisa' color='white'/></h2>
      <p>Brisa es un nuevo rolling paper 420% chileno, que nace para ofrecer un producto de la más alta calidad, al mejor precio.</p>
    </div>
    <style jsx>{`
      img {
        height: 100vh;
        width: 100%;
        object-fit: cover;
      }
      .wrapper {
        position: absolute;
        bottom: 20px;
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
