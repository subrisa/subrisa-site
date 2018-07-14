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
              <a href='https://www.facebook.com/SuBrisaChile/' target='_blank'><Facebook /></a>
              <a href='http://instagram.com/brisachile' target='_blank'><Instagram /></a>
            </div>
          </div>
          <div className='sitemap'>
            <Sitemap />
          </div>
          <div className='newsletter'>
            <form>
              <label>¿Quieres saber más sobre la Brisa? Deja tu email y recibe nuestro boletín de noticias.</label>
              <input type='text' placeholder='marijuana@ejemplo.com' autoCorrect="off" autoCapitalize="off" spellCheck="false" />
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
        form button {
          background: transparent;
          border: 1px solid white;
          padding-top: 5px;
          padding-bottom: 5px;
        }
      `}</style>
    </footer>


export default Footer
