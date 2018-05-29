import React from 'react'
import Title from '../base/Title'

const About = () =>
  <div className='root'>
    <h2><Title text='Contacto' color='#85ABA9' /></h2>
    <div>
      <div>
        <p>Quer receber novidades, lançamentos bla bla. Deixe seu email bla bla.</p>
        <input type='text' placeholder='exemplo@dominio.com' />
      </div>
      <div>
        <p>Você tambem pode falar com a gente direto no Facebook, é so clicar ali -></p>
      </div>
    </div>
    <style jsx>{`
      .root {
        margin-bottom: 4rem;
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
      input {
        width: 100%;
        font-size: 22px;
        box-sizing: border-box;
        text-align: center;
        border: 3px solid #85ABA9;
        border-radius: 50px;
        padding: 5px;
        font-weight: 300;
      }
    `}</style>
  </div>

export default About
