import React from 'react'

const WidthLimiter = ({children}) =>
  <div className='root'>
    {children}
    <style jsx>{`
      .root {
        max-width: 720px;
        margin: 0 auto;
        padding: 1rem;
      }
    `}</style>
  </div>

export default WidthLimiter
