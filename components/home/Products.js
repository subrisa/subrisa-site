import React from 'react'
import Title from '../base/Title'
import WidthLimiter from '../struct/WidthLimiter'

const About = () =>
  <WidthLimiter>
    <div className='root' id='products'>
      <h2><Title text='Productos'  color='rgb(132, 120, 148)' /></h2>
      <div>
        <li>
          <h3>Mini Classic</h3>
          <div><img src='http://via.placeholder.com/480x360' /></div>
          <p>No tamanho ideal para bla ...</p>
        </li>
        <li>
          <h3>Mini Slim</h3>
          <div><img src='http://via.placeholder.com/480x360' /></div>
          <p>Perfeita para o sabor do bla ...</p>
        </li>
        <li>
          <h3>Mini Brown</h3>
          <div><img src='http://via.placeholder.com/480x360' /></div>
          <p>Sem alvejante e bla puro ...</p>
        </li>
      </div>
      <div>
        <li>
          <h3>Classic</h3>
          <div><img src='http://via.placeholder.com/480x360' /></div>
          <p>No tamanho ideal para bla ...</p>
        </li>
        <li>
          <h3>Slim</h3>
          <div><img src='http://via.placeholder.com/480x360' /></div>
          <p>Perfeita para o sabor do bla ...</p>
        </li>
        <li>
          <h3>Brown</h3>
          <div><img src='http://via.placeholder.com/480x360' /></div>
          <p>Sem alvejante e bla puro ...</p>
        </li>
      </div>
    </div>
    <style jsx>{`
      .root {
        margin-bottom: 4rem;
      }
      .root > div {
        display: flex;
        justify-content: space-between;
      }
      .root > div > li {
        list-style: none;
        width: 30%;
      }
      .root > div > li h3 {
        text-transform: uppercase;
        text-align: center;
        font-weight: 300;
      }
    `}</style>
  </WidthLimiter>

export default About
