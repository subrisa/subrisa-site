import React from 'react'

const Title = ({ text, color }) =>
  <span className='wrapper'>
    { text }
    <span className='underline' />
    <style jsx>{`
      .wrapper {
        text-transform: uppercase;
        text-align: center;
        font-size: 28px;
        position: relative;
        display: block;
      }
      .underline {
        position: absolute;
        width: 60px;
        height: 6px;
        border-radius: 3px;
        bottom: -10px;
        left: calc(50% - 30px);
        background: ${color};
      }
    `}</style>
  </span>

export default Title
