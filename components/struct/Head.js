import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

const CustomHead = ({ title }) =>
  <div>
    <Head>
      <title>{'BRISA'}</title>
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,500,600" rel="stylesheet" />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://subrisa.com/static/favicons/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://subrisa.com/static/favicons/apple-touch-icon-152x152.png" />
      <link rel="icon" type="image/png" href="https://subrisa.com/static/favicons/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="https://subrisa.com/static/favicons/favicon-16x16.png" sizes="16x16" />
      <meta name="application-name" content="Brisa"/>
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="https://subrisa.com/static/favicons/mstile-144x144.png" />   
    </Head>
    <style jsx global>{`
      body {
        margin: 0;
        font-family: 'Lato', sans-serif;
        overflow-x: hidden;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      h1, h2, h3, h4, h5 {
        font-weight: inherit;
        font-size: inherit;
      }
      a, button {
        text-decoration: none;
        color: inherit;
        fill: inherit;
        cursor: pointer;
      }
      a:visited { color: inherit; }
      a:focus, input:focus { outline: none; }
      button {
        background: none;
        border: none;
        font-size: inherit;
      }
      form input,
      form button,
      form textarea {
        font-size: 20px;
        box-sizing: border-box;
        border: 0;
        border-radius: 16px;
        font-weight: 300;
        background: transparent;
        color: inherit;
        width: 100%;
        font-family: inherit;
      }
      form button {
        color: white;
        padding: 6px 12px;
        background: #85ABA9;
        font-weight: 300;
        text-transform: uppercase;
        margin-top: 1em;
      }
    `}</style>
  </div>

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default CustomHead
