import React from 'react'

const Title = ({ text, color }) =>
  <span className='wrapper'>
    { text }
    <span className='underline' />
    <style jsx>{`
      .wrapper {
        text-transform: uppercase;
        text-align: center;
        font-size: 2.333rem;
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
    `}</style>
  </span>

export default Title
