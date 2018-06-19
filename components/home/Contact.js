import React from 'react'
import Title from '../base/Title'
import WidthLimiter from '../struct/WidthLimiter'

const About = ({ contact_title, newsletter_text, contact_text  }) =>
  <WidthLimiter>
    <div className='root' id='contact'>
      <h2><Title text={contact_title[0].text} color='#85ABA9' /></h2>
      <div>
        <div>
          <p>{newsletter_text && newsletter_text[0].text}</p>
          <input type='text' placeholder='Maria Juana Rojas' autocorrect="off" spellcheck="false" />
          <input type='text' placeholder='marijuana@ejemplo.com' autocorrect="off" autocapitalize="off" spellcheck="false" />
          <button>Me inscreva!</button>
        </div>
        <div>
          <p>{contact_text && contact_text[0].text}</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .root {
        padding-bottom: 6rem;
      }
      .root > div {
        font-weight: 300;
      }
      input,
      button {
        width: 100%;
        font-size: 20px;
        box-sizing: border-box;
        text-align: center;
        border: 0px; 1px solid #85ABA9;
        border-radius: 50px;
        font-weight: 300;
      }
      button {
        color: white;
        background: #85ABA9;
        font-weight: bold;
        margin-top: 10px;
        padding: 7px;
      }
      @media screen and (min-width: 600px) {
        .root > div {
          display: flex;
          justify-content: space-between;
        }
        .root > div > div {
          width: 45%;
        }
      }
    `}</style>
  </WidthLimiter>


export default About
