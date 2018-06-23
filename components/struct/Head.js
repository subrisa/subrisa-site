import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

const CustomHead = ({ title }) =>
  <div>
    <Head>
      <title>{'BRISA'}</title>
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
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
      }
      form button {
        color: white;
        padding: 6px 12px;
        background: #85ABA9;
        font-weight: bold;
        margin-top: 10px;
      }
    `}</style>
  </div>

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default CustomHead
