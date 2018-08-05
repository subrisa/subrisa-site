import React from 'react'

const Title = ({ text, color }) =>
  <span className='wrapper'>
    { text }
    <span className='underline' />
    <style jsx>{`
      .wrapper {
        text-transform: uppercase;
        font-size: 1.75rem;
        text-align: center;
        position: relative;
        display: block;
        font-weight: 300;
        padding-bottom: 0.55em;
      }
      .underline {
        position: absolute;
        width: 60px;
        height: 6px;
        border-radius: 3px;
        top: 1.6em;
        left: calc(50% - 30px);
        background: ${color};
      }
      @media only screen and (min-width: 600px) {
        .wrapper {
          font-size: 2.333rem;
        }
      }
    `}</style>
  </span>

export default Title
