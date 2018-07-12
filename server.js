const express = require('express')
const next = require('next')
const axios = require('axios')

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
      console.log(req.params.email)
      var mailchimpApiUrl = 'https://us12.api.mailchimp.com/3.0'
      var apiKey = process.env.MAILCHIMP_K;

      axios({
        method: 'POST',
        url: 'https://us12.api.mailchimp.com/3.0/lists/653ed43bc3/members',
        headers: {Authorization: 'apikey '+apiKey},
        data: {
          "email_address": req.params.email,
          "status": "subscribed"
        }
      })
      .then(function (response) {
        res.send('success')
      })
      .catch(function (error) {
        res.status(500).send('error')
        console.log('mailchimp error', error);
      });
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })