import React from 'react'
import { Logo } from '../base/Icons'
import MainMenu from './MainMenu'
import SocialMenu from './SocialMenu'

const Header = () =>
  <header>
    <Logo width={90} height={90} color='white' />
    <div><MainMenu /></div>
    <SocialMenu />
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background: rgba(0, 0, 0, 0.1);
        color: white;
        fill: white;
        position: fixed;
        left: 0; right: 0; top: 0;
      }
      header > div {
        min-width: 60%;
      }
    `}</style>
  </header>

export default Header
