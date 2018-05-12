import React from 'react'
import Title from '../base/Title'

const About = () =>
  <div className='root'>
    <h2><Title text='Productos'  color='rgb(132, 120, 148)' /></h2>
    <div>
      <li>
        <span>Mini Classic</span>
        <div>imagen</div>
        <span>No tamanho ideal para bla ...</span>
      </li>
      <li>
        <span>Mini Slim</span>
        <div>imagen</div>
        <span>Perfeita para o sabor do bla ...</span>
      </li>
      <li>
        <span>Mini Brown</span>
        <div>imagen</div>
        <span>Sem alvejante e bla puro ...</span>
      </li>
    </div>
    <style jsx>{`
      .root > div {
        display: flex;
        justify-content: space-between;
        max-width: 700px;
        margin: 50px auto;
      }
      .root > div > li {
        list-style: none;
        text-align: center;
        width: 30%;
      }
    `}</style>
  </div>

export default About
