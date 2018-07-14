import React from 'react'
import Title from '../base/Title'
import WidthLimiter from '../struct/WidthLimiter'
import { RichText } from 'prismic-reactjs'

const About = ({ contact_title, newsletter_text, contact_text  }) =>
  <WidthLimiter>
    <div className='root' id='contact'>
      <h2><Title text={contact_title[0].text} color='#85ABA9' /></h2>
      <div>
        <form>
          <br />
          <h3>{contact_text && RichText.render(contact_text)}</h3>
          <form method="post" action='/contact/form'>
            <input type='text' name='name' placeholder='Maria Juana Rojas' autoCorrect="off" spellCheck="false" />
            <input type='text' name='email' placeholder='marijuana@ejemplo.com' autoCorrect="off" autoCapitalize="off" spellCheck="false" />
            <textarea name='message' placeholder='Su Mensaje' rows='1' />
            <button type='submit'>Enviar</button>
          </form>
        </form>
      </div>
    </div>
    <style jsx>{`
      .root {
        padding-bottom: 6rem;
      }
      .root > div {
        font-weight: 300;
      }
      @media screen and (min-width: 600px) {
        .root > div {
          //display: flex;
          //justify-content: space-between;
          max-width: 420px;
          margin: 0 auto;
        }
        h3 {
          text-align: center;
        }
      }
    `}</style>
  </WidthLimiter>


export default About
