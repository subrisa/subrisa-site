import React from 'react'
import { Facebook, Instagram } from '../base/Icons'

const SocialMenu = () =>
  <nav>
    <a><Facebook /></a>
    <a><Instagram /></a>
    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-around;
      }
    `}</style>
  </nav>


export default SocialMenu
