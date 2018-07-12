import React from 'react'
import { Facebook, Instagram } from '../base/Icons'

const SocialMenu = () =>
  <nav>
    <div>
      <a href='https://www.facebook.com/SuBrisaChile/' target='_blank'><Facebook /></a>
    </div>
    <div>
      <a href='http://instagram.com/brisachile' target='_blank'><Instagram /></a>
    </div>
    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
      }
      nav > div {
        width: 18px;
        height: 18px;
        margin: 0 5px;
      }
      nav > div:first-child { margin-left: 0 }
      nav > div:last-child { margin-right: 0 }
    `}</style>
  </nav>


export default SocialMenu
