import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

const CustomHead = ({ title }) =>
  <div>
    <Head>
      <title>{'BRISA'}</title>
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,600,700,900" rel="stylesheet" />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://subrisa.com/static/favicons/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://subrisa.com/static/favicons/apple-touch-icon-152x152.png" />
      <link rel="icon" type="image/png" href="https://subrisa.com/static/favicons/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="https://subrisa.com/static/favicons/favicon-16x16.png" sizes="16x16" />
      <meta name="application-name" content="Brisa"/>
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="https://subrisa.com/static/favicons/mstile-144x144.png" />   
      <meta name="viewport" content="width=device-width, initial-scale=1.0" user-scalable='no' />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-116955640-1"></script>
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-116955640-1');
      `}} />
    </Head>
    <style jsx global>{`
      body {
        margin: 0;
        font-family: 'Lato', sans-serif;
        overflow-x: hidden;
        font-size: 12pt;
        color: #131516;
        fill: #131516;
        line-height: 1.333;
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
      a:visited, a:hover {
        color: inherit;
      }
      a:focus,
      input:focus,
      textarea:focus,
      button:focus {
        outline: none;
      }
      button {
        background: none;
        border: none;
        font-size: inherit;
      }
      form input,
      form button,
      form textarea {
        box-sizing: border-box;
        font-size: inherit;
        border: 0;
        border-radius: 16px;
        font-weight: 300;
        background: transparent;
        color: inherit;
        width: 100%;
        font-family: inherit;
      }
      form .error,
      form .error::placeholder {
        color: red;
      }
      form button {
        color: white;
        padding: 6px 12px;
        background: #85ABA9;
        font-weight: 300;
        text-transform: uppercase;
        margin-top: .5rem;
      }
      form button:disabled {
        opacity: 0.7;
        pointer-events: none;
      }
    `}</style>
  </div>

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default CustomHead
