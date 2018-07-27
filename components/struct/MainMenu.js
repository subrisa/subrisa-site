import React from 'react'
import { handleAnchorClick } from 'lib/animatedScroll'
import Link from 'next/link'

const MainMenu = () =>
  <nav>
    <Link href='/#about' ><a onClick={ handleAnchorClick }>Nosotros</a></Link>
    <Link href='/#products'><a onClick={ handleAnchorClick }>Productos</a></Link>
    <Link href='/store'><a>Tienda</a></Link>
    <Link href='/#contact'><a onClick={ handleAnchorClick }>Contacto</a></Link>
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
