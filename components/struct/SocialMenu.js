import React from 'react'
import { Facebook, Instagram } from '../base/Icons'

const SocialMenu = () =>
  <nav>
    <a href='http://facebook.com/brisachile' target='_blank'><Facebook /></a>
    <a href='http://facebook.com/brisachile' target='_blank'><Instagram /></a>
    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
      }
      nav a { margin: 0 10px; }
      nav a:first-child { margin-left: 0 }
      nav a:last-child { margin-right: 0 }
    `}</style>
  </nav>


export default SocialMenu
