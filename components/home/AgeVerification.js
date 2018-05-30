import React from 'react'
import { withState, compose } from 'recompose'

const AgeVerification = ({children, locked, setLocked}) =>
  <div className={locked && 'locked'}>
    <div id='ageVerification'>
      {children}
    </div>
    <div className='modal'>
      <div>
        <span>Você é maior de 18 anos?</span>
        <div>
          <button onClick={()=>setLocked(!locked)}>Sim</button>
          <button onClick={()=>window.location.href = 'https://www.fantasilandia.cl'}>Não</button>
        </div>
      </div>
    </div>
    <style jsx>{`
      #ageVerification {
        transition: 1s filter, 1s transform;
        backface-visibility: hidden;
      }
      .locked {
        height: 100vh;
        overflow: hidden;
      }
      .locked #ageVerification{
        filter: blur(10px);
        transform: scale(1.1) translateY(3%);
      }
      .modal {
        position: fixed;
        top: 0; bottom: 0; left: 0; right: 0;
        pointer-events: none;
        background: rgba(0,0,0,0.7);
        z-index: 20000;
        opacity: 0;
        transition: 1s all;
        webkit-backface-visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .locked .modal {
        opacity: 1;
        pointer-events: all;
      }
      .modal > div {
        color: white;
        text-align: center;
        font-size: 50px;
        text-transform: uppercase;
        font-weight: 300;
        padding: 40px;
      }
      .modal > div button {
        margin: 40px;
        text-transform: uppercase;
      }
    `}</style>
  </div>

export default compose(
  withState('locked', 'setLocked', true)
)(AgeVerification)
