import React from 'react'

const MainMenu = () =>
  <nav>
    <a>Nosotros</a>
    <a>Productos</a>
    <a>Noticias</a>
    <a>Contacto</a>
    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-around;
        text-transform: uppercase;
        width: 100%;
      }
    `}</style>
  </nav>


export default MainMenu
