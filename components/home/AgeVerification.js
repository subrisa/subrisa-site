import React from 'react'
import { compose, withHandlers } from 'recompose'
import withAgeVerified from './withAgeVerified';
import { verifyAge } from '/store';

const AgeVerification = ({children, handleConfirmationClick, ageVerified, persistLoaded}) =>
  <div>
    <div className={`root ${!ageVerified && persistLoaded && 'locked'}`}>
      <div id='ageVerification'>
        {children}
      </div>
      <div className='modal'>
        <div>
          <span>Es mayor de 18 años?</span>
          <div>
            <button onClick={handleConfirmationClick}>Si</button>
            <button onClick={()=>window.location.href = 'https://www.fantasilandia.cl'}>No</button>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      #ageVerification {
        transition: .8s filter, .8s transform;
        backface-visibility: hidden;
      }
      .locked {
        height: 100vh;
        overflow: hidden;
      }
      .locked #ageVerification{
        filter: blur(30px);
        transform: scale(1.2) translateY(6%);
      }
      .modal {
        position: fixed;
        top: 0; bottom: 0; left: 0; right: 0;
        pointer-events: none;
        background: rgba(0,0,0,0.7);
        z-index: 20000;
        opacity: 0;
        transition: .8s opacity .2s;
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
      button {
        margin: 40px;
        text-transform: uppercase;
      }
    `}</style>
  </div>

export default compose(
  withAgeVerified,
  withHandlers({
    handleConfirmationClick: ({dispatch}) => e => dispatch(verifyAge())
  })
)(AgeVerification)
