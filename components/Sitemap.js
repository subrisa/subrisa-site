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
        width: 100%;
      }
      .root > div {
        margin-bottom: 5px;
      }
    `}</style>
  </div>

export default Sitemap
