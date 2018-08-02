import React from 'react'
import Title from '../base/Title'
import WidthLimiter from '../struct/WidthLimiter'
import { RichText } from 'prismic-reactjs'
import ContactForm from '../contact/ContactForm';

const Contact = ({ contact_title, newsletter_text, contact_text  }) =>
  <WidthLimiter>
    <div className='root' id='contact'>
      <h2><Title text={contact_title[0].text} color='#7FB8B5' /></h2>
      <div>
        <h3>{contact_text && RichText.render(contact_text)}</h3>
        <ContactForm />
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


export default Contact
