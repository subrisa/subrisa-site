import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

const CustomHead = () =>
  <div>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
    </Head>
    <style jsx global>{`
      body {
        margin: 0;
        font-family: 'Lato', sans-serif;
        font-size: 14px;
      }
      img { max-width: 100%; }
      h1, h2, h3, h4, h5 { font-weight: inherit; }
    `}</style>
  </div>

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default CustomHead
