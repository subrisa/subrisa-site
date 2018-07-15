import React from 'react'
import { compose } from 'recompose'
import { withFormik } from 'formik'
import fetch from 'isomorphic-unfetch'
import to from 'await-to-js';


function validateEmail(email) {
  if (!email) {
    return 'Required'
  }
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()) ? false : 'Invalid'
}

const ContactForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) =>
  <div>
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        placeholder='Maria Juana Rojas'
        autoCorrect="off"
        spellCheck="false"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
      />
      <input
        type='email'
        name='email'
        placeholder='marijuana@ejemplo.com'
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        className={`${(touched.email || values.message) && errors.email && 'error'}`}
      />
      <textarea
        name='message'
        placeholder='Su Mensaje'
        rows='1'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.message}
        className={`${errors.message && 'error'}`}
      />
      <button
        type='submit'
        disabled={isSubmitting || errors.email || errors.message}
      >Enviar</button>
    </form>
    <style jsx>{`
      .root {
        
      }
    `}</style>
  </div>

export default compose(
  withFormik({
    mapPropsToValues: props => ({ name: '', email: '', message: '' }),
    handleSubmit: async (values, {setSubmitting}) => {
      const [ err, res ] = await to(fetch("/contact/form", {
        method: "POST",
        body: JSON.stringify(values)
      }))
      if (err || res.statusCode != 200) return
      alert('Su mensaje ha sido enviado')
      setSubmitting(false)
    },
    validate: (values, props) => {
      const errors = {
        email: validateEmail(values.email),
        message: values.message ? false : 'Required'
      }
      return errors
    }
  })
)(ContactForm)
