import React from 'react'
import Title from '../base/Title'

const About = () =>
  <div className='root'>
    <h2><Title text='Productos'  color='rgb(132, 120, 148)' /></h2>
    <div>
      <li>
        <span>producto1</span>
        <div>imagen</div>
        <span>Description</span>
      </li>
      <li>
        <span>producto1</span>
        <div>imagen</div>
        <span>Description</span>
      </li>
      <li>
        <span>producto1</span>
        <div>imagen</div>
        <span>Description</span>
      </li>
    </div>
    <style jsx>{`
      .root > div {
        display: flex;
        justify-content: space-between;
        max-width: 700px;
        margin: 0 auto;
      }
      .root > div > li {
        list-style: none;
      }
    `}</style>
  </div>

export default About
