import React from 'react'
import Sitemap from '../Sitemap.js'

const Footer = () =>
  <footer>
    <Sitemap />
    <style jsx>{`
      footer {
        background: rgb(132, 120, 148);
        color: white;
        min-height: 200px;
      }
    `}</style>
  </footer>

export default Footer
