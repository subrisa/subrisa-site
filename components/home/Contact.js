import React from 'react'
import Title from '../base/Title'

const About = () =>
  <div className='root' id='contact'>
    <h2><Title text='Contacto' color='#85ABA9' /></h2>
    <div>
      <div>
        <p>Quer receber novidades, lançamentos bla bla. Deixe seu email bla bla.</p>
        <input type='text' placeholder='exemplo@dominio.com' />
        <button>Me inscreva!</button>
      </div>
      <div>
        <p>Você tambem pode falar com a gente direto no Facebook, é so clicar ali -></p>
      </div>
    </div>
    <style jsx>{`
      .root {
        padding-bottom: 6rem;
        //padding-bottom: 20vw;
        //background-image: url('/static/bg.png');
        background-size: 100%;
        background-position: center bottom;
        background-repeat: no-repeat;
      }
      .root > div {
        max-width: 720px;
        padding: 0 20px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
      }
      .root > div > div {
        width: 45%;
      }
      input,
      button {
        width: 100%;
        font-size: 22px;
        box-sizing: border-box;
        text-align: center;
        border: 0px; 1px solid #85ABA9;
        border-radius: 50px;
        padding: 5px;
        font-weight: 300;
        margin-bottom: 10px;
      }
      button {
        color: white;
        background: #85ABA9;
        font-weight: bold;
        border-width: 1px;
      }
    `}</style>
  </div>

export default About
