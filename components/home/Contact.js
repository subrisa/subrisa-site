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
          <input type='text' placeholder='Maria Juana Rojas' autocorrect="off" spellcheck="false" />
          <input type='text' placeholder='marijuana@ejemplo.com' autocorrect="off" autocapitalize="off" spellcheck="false" />
          <textarea placeholder='Sua Mensagem' rows='1' />
          <button>Enviar</button>
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
