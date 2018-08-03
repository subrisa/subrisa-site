import React from 'react'

const Main = ({children}) =>
  <main>
    {children}
    <style jsx>{`
      main {
        min-height: calc(100vh - 26vw);
      }
    `}</style>
  </main>

export default Main
