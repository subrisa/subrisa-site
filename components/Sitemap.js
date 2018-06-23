import React from 'react'

const Sitemap = () =>
  <div className='root'>
    <label>Menu</label>
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
      label {
        font-weight: bold;
      }
      .root {
        width: 100%;
      }
      .root > div {
        margin-top: 5px;
      }
    `}</style>
  </div>

export default Sitemap
