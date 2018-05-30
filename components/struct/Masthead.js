import React from 'react'
import { Logo, LogoIcon } from '../base/Icons'
import MainMenu from './MainMenu'
import SocialMenu from './SocialMenu'
import { handleAnchorClick } from '../../lib/animatedScroll'
import { withState, withHandlers, lifecycle, compose } from 'recompose'

const enhance = compose(
  withState('scrollTop', 'setScrollTop', 0),
  withHandlers({
    handleScroll: ({ setScrollTop }) => e => setScrollTop(window.pageYOffset)
  }),
  lifecycle({
    componentDidMount() {
      window.addEventListener('scroll', this.props.handleScroll);
    },
    componentWillUnmount() {
      window.removeEventListener('scroll', this.props.handleScroll);
    }
  })
)

const Header = ({ scrollTop }) =>
  <header className={scrollTop > 60 && 'small'}>
    <div style={{position: 'relative'}}>
      <a href='/#' onClick={handleAnchorClick}>
        <div className='logoWrapper full'><Logo /></div>
        <div className='logoWrapper icon'><LogoIcon /></div>
      </a>
    </div>
    <div className='menuWrapper'><MainMenu /></div>
    <div className='menuWrapper'><SocialMenu /></div>
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        color: white;
        fill: white;
        position: fixed;
        left: 0; right: 0; top: 0;
        transition: .9s all;
        z-index: 5000;
      }
      .logoWrapper {
        width: 117px;
        transition: .5s all .3s;
        backface-visibility: hidden;
        font-size: 0;
      }
      header .logoWrapper.icon {
        transform: rotateY(180deg);
        position: absolute;
        top: 0;
      }
      header .menuWrapper {
        transition: 1s all;
      }
      header.small {
        background: rgba(0, 0, 0, 0.8);
        transition: .9s background-color .2s;
        padding: 10px 20px;
      }
      header.small .logoWrapper {
        width: 39px;
        transition: .3s all;
      }
      header.small .logoWrapper.icon {
        transform: rotateY(0deg);
      }
      header.small .logoWrapper.full {
        transform: rotateY(180deg);
      }
      header.small .menuWrapper {
        transition: .3s all;
      }
    `}</style>
  </header>

export default enhance(Header)
