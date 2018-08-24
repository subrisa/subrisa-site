import React from 'react'
import { handleAnchorClick } from 'lib/animatedScroll'
import { Link } from '/routes'

const MainMenu = () =>
  <nav>
    <Link route='/#about' ><a onClick={ handleAnchorClick }>Nosotros</a></Link>
    <Link route='/#products'><a onClick={ handleAnchorClick }>Productos</a></Link>
    <Link route='/tienda'><a>Encuéntranos</a></Link>
    <Link route='/#contact'><a onClick={ handleAnchorClick }>Contacto</a></Link>
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
