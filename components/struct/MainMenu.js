import React from 'react'
import { handleAnchorClick } from '../../lib/animatedScroll'

const MainMenu = () =>
  <nav>
    <a href='/#about' onClick={ handleAnchorClick }>Nosotros</a>
    <a href='/#products' onClick={ handleAnchorClick }>Productos</a>
    <a>Noticias</a>
    <a>Contacto</a>
    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
        text-transform: uppercase;
        font-size: 1em;
      }
      nav a { margin: 0 20px; }
      nav a:first-child: { margin-left: 0 }
      nav a:last-child: { margin-right: 0 }
    `}</style>
  </nav>

export default MainMenu
