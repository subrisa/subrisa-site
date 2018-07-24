import React from 'react'
import { handleAnchorClick } from 'lib/animatedScroll'

const MainMenu = () =>
  <nav>
    <a href='/#about' onClick={ handleAnchorClick }>Nosotros</a>
    <a href='/#products' onClick={ handleAnchorClick }>Productos</a>
    <a href='store' onClick={ handleAnchorClick }>Tienda</a>
    <a href='/#contact' onClick={ handleAnchorClick }>Contacto</a>
    <style jsx>{`
      nav {
        text-transform: uppercase;
        font-size: 1em;
      }
      nav a { margin: 8px 20px; display: block; }
      nav a:first-child: { margin-left: 0 }
      nav a:last-child: { margin-right: 0 }
      @media screen and (min-width: 600px) {
        nav {
          display: flex;
          justify-content: space-between;
        }
      }
    `}</style>
  </nav>

export default MainMenu
