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
        }
        .icons > div {
          display: flex;
          height: 40px;
          margin-top: 10px;
        }
        .sitemap {
          width: 500px;
        }
      `}</style>
    </footer>


export default Footer
