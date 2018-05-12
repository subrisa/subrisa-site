import React from 'react'
import Sitemap from '../Sitemap.js'
import { LogoIcon, Facebook, Instagram } from '../base/Icons'

const Footer = () =>
  <footer>
    <div style={{width: 90}}><LogoIcon /><Facebook /><Instagram /></div>
    <Sitemap />
    <style jsx>{`
      footer {
        background: rgb(132, 120, 148);
        color: white;
        min-height: 200px;
        fill: white;
      }
    `}</style>
  </footer>

export default Footer
