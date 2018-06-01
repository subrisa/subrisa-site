import React from 'react'
import { withState, compose, lifecycle } from 'recompose'
import { LogoIconSpinning } from '../base/Icons'

const AgeVerification = ({children, locked, setLocked, loading}) =>
  <div>
    {locked && <div className='spinner'>
      <LogoIconSpinning />
    </div>}
    <div className={`root ${locked && 'locked'} ${loading && 'loading'}`}>
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
    </div>
    <style jsx>{`
      .root {
        transition: .6s opacity;
      }
      .loading {
        opacity: 0;
      }
      .spinner {
        position: absolute;
        top: 50%;
        text-align: center;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 96px;
        height: 96px;
      }
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
  withState('locked', 'setLocked', true),
  withState('loading', 'setLoading', true),
  lifecycle({
    componentDidMount() {
      const { setLoading } = this.props
      setTimeout(()=>setLoading(false), 2000)
    }
  })
)(AgeVerification)
