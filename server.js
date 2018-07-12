const express = require('express')
const next = require('next')

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

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })