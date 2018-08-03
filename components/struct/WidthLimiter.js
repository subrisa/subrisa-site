const WidthLimiter = ({children}) =>
  <div className='width-limiter'>
    {children}
    <style jsx>{`
      .width-limiter {
        max-width: 800px;
        margin: 0 auto;
        padding: .5rem 1rem;
      }
      @media only screen and (min-width: 1200px) {
        .width-limiter {
          max-width: 920px;
        }
      }
    `}</style>
  </div>

export default WidthLimiter
