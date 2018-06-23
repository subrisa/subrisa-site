import React from 'react'
import Sitemap from '../Sitemap.js'
import { LogoIcon, Facebook, Instagram } from '../base/Icons'
import WidthLimiter from './WidthLimiter'
const Footer = () =>
    <footer>
      <WidthLimiter>
        <div className='wrapper'>
          <div className='icons'>
            <LogoIcon />
            <div>
             <Facebook />
             <Instagram />
            </div>
          </div>
          <div className='sitemap'>
            <Sitemap />
          </div>
          <div className='newsletter'>
            <form>
              <label>Quer saber mais sobre a Brisa? Deixe seu email e assine nossa newsletter.</label>
              <input type='text' placeholder='marijuana@ejemplo.com' autocorrect="off" autocapitalize="off" spellcheck="false" />
              <button>Suscríbete</button>
            </form>
          </div>
        </div>
      </WidthLimiter>
      <style jsx>{`
        footer {
          background: rgb(132, 120, 148);
          background-image: url('/static/bg.png');
          background-size: 100%;
          background-position: center bottom;
          background-repeat: no-repeat;
          min-height: 26vw;
          color: white;
          fill: white;
        }
        .wrapper {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
        }
        .icons {
          width: 90px;
          padding-right: 40px;
        }
        .icons > div {
          display: flex;
          height: 40px;
          margin-top: 10px;
        }
        .sitemap {
          padding-right: 20px;
        }
        .newsletter {
          width: 40%;
        }
      `}</style>
    </footer>


export default Footer
