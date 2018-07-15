const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const mailgun = require('mailgun-js')({apiKey: process.env.MG_KEY, domain: 'mg.subrisa.com'})

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

function redirectToNaked(req, res, next) {
  if (req.hostname === 'www.subrisa.com') {
    return res.redirect(`https://subrisa.com${req.originalUrl}`);
  }
  return next(); // call the next middleware (or route)
}


app.prepare()
  .then(() => {
    const server = express()

    server.use(redirectToNaked)

    server.post('/signup/:email', (req, res) => {
      res.send('success')
    });

  server.post('/contact/form', bodyParser.json({type: '*/*'}), (req, res) => {
      const data = {
        from: 'donotreply@subrisa.com',
        to: 'contacto@subrisa.com',
        subject: `Formulario do site: ${req.body.name} - ${req.body.email}`,
        text: req.body.message
      }
      mailgun.messages().send(data, function (err, body) {
        if(err) return res.status(500).json(err)
        res.json({success: true})
      });
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })