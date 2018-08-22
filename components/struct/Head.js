import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { colors } from '/lib/style';

const CustomHead = ({ children }) =>
  <Head>
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,600,700,900" rel="stylesheet" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://subrisa.com/static/favicons/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://subrisa.com/static/favicons/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="https://subrisa.com/static/favicons/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="https://subrisa.com/static/favicons/favicon-16x16.png" sizes="16x16" />
    <meta name="application-name" content="Brisa"/>
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="https://subrisa.com/static/favicons/mstile-144x144.png" />   
    <meta name="viewport" content="width=device-width, initial-scale=1.0" user-scalable='no' />
    <style jsx global>{`
      body {
        margin: 0;
        font-family: 'Lato', sans-serif;
        overflow-x: hidden;
        font-size: 12pt;
        color: ${colors.outterspace};
        fill: ${colors.outterspace};
        line-height: 1.5;
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
        transition: .7s filter, .3s opacity, .1s background-color;
      }
      button:active {
        opacity: 0.7;
        transition: .1s filter, .1s opacity;
      }
      form input,
      form button,
      form textarea {
        box-sizing: border-box;
        font-size: inherit;
        line-height: inherit;
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
        background-color: #7FB8B5;
        background-image: radial-gradient(at top left,#7FB8B5,#A291BA);
        font-weight: 300;
        text-transform: uppercase;
        margin-top: .5rem;
        animation: GradientFlow 8s linear infinite;
        background-size: 150% 150%;
      }
      form button:disabled {
        opacity: 0.7;
        pointer-events: none;
      }
      //animattions
      .fade {
        opacity: 0;
        transition: .2s opacitiy;
      }

      @keyframes GradientFlow { 
        0%{background-position:0% 0%}
        25%{background-position:25% 100%}
        50%{background-position:100% 100%}
        75%{background-position:50% 50%}
        100%{background-position:0% 0%}
      }
    `}</style>
  </Head>

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default CustomHead
