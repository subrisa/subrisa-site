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
          color: white;
          fill: white;
        }
        .wrapper {
          display: flex;
          justify-content: space-between;
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
