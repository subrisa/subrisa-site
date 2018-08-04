import React from 'react'
import { Logo, LogoIcon } from '../base/Icons'
import MainMenu from './MainMenu'
import SocialMenu from './SocialMenu'
import { handleAnchorClick } from '../../lib/animatedScroll'
import { withState, withHandlers, lifecycle, compose } from 'recompose'
import WidthLimiter from "./WidthLimiter";
import { Link } from '/routes'

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

const Header = ({ scrollTop, showSmall }) =>
  <div className={`masthead ${(scrollTop > 60 || showSmall) && 'small'}`}>
    <WidthLimiter>
      <header>
        <div style={{position: 'relative'}}>
          <Link route='/'><a onClick={handleAnchorClick}>
            <div className='logoWrapper full'><Logo /></div>
            <div className='logoWrapper icon'><LogoIcon /></div>
          </a></Link>
        </div>
        <div className='main menuWrapper'><MainMenu /></div>
        <div className='menuWrapper'><SocialMenu /></div>
      </header>
    </WidthLimiter>
    <style jsx>{`
      .masthead {
        color: white;
        fill: white;
        position: fixed;
        left: 0; right: 0; top: 0;
        transition: .9s all;
        z-index: 5000;
        box-shadow: 0px 140px 140px -150px rgba(0,0,0,0.8) inset
      }
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .logoWrapper {
        width: 91px;
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
        transition: 1s all .2s;
      }
      .masthead.small {
        background: rgba(5, 9, 18, 0.8);
        transition: .9s background-color .2s;
        backdrop-filter: blur(5px);
      }
      .masthead.small .logoWrapper {
        width: 39px;
        transition: .3s all;
      }
      .masthead.small .logoWrapper.icon {
        transform: rotateY(0deg);
      }
      .masthead.small .logoWrapper.full {
        transform: rotateY(180deg);
      }
      .masthead.small .menuWrapper {
        transition: .3s all;
      }
      @media screen and (max-width: 600px) {
        .masthead.small .main.menuWrapper {
          margin-top: -120px;
          transform: translateX(20px);
          opacity: 0;
          transition: .3s all;
        }
      }
      @media screen and (min-width: 600px) {
        .logoWrapper {
          width: 117px;
        }
      }
    `}</style>
  </div>

export default enhance(Header)
