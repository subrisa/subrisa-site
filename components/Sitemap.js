import React from 'react'

const Sitemap = () =>
  <div className='root'>
    <div>
      <a>Nosotros</a>
    </div>
    <div>
      <a>Productos</a>
    </div>
    <div>
      <a>Noticias</a>
    </div>
    <div>
      <a>Contacto</a>
    </div>
    <style jsx>{`
      .root {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    `}</style>
  </div>

export default Sitemap
