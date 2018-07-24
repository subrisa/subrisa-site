const WidthLimiter = ({children}) =>
  <div className='root'>
    {children}
    <style jsx>{`
      .root {
        max-width: 720px;
        margin: 0 auto;
        padding: 1rem;
      }
      @media only screen and (min-width: 1200px) {
        .root {
          max-width: 920px;
        }
      }
    `}</style>
  </div>

export default WidthLimiter
