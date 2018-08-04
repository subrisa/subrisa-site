import { compose, withState, lifecycle, branch } from 'recompose'
import withCheckoutCreate from './withCheckoutCreate'
import { setCheckoutId } from '/store'
import CartContent from './CartContent'
import { CartIcon } from '../base/Icons'
import WidthLimiter from '../struct/WidthLimiter'
import withCheckoutId from './withCheckoutId'
import withCheckout from './withCheckout'

const Cart = ({ checkoutId, persistLoaded, checkout, isOpen, setOpen }) =>
  <div className='cart-spacer'>
    <div className={`cart ${isOpen && 'open'}`}>
      <WidthLimiter>
        <div className='head' onClick={e => isTouchDevice() && setOpen(!isOpen)}>
          <h3>Hola, Visitante</h3>
          <h3>
            {checkout && checkout.lineItems.edges.length}<span><CartIcon /></span>
          </h3>
        </div>
      </WidthLimiter>
      <div className='animation-wrapper'>
        <WidthLimiter>
          <div className='content'>
            <div />
            <div>
              {checkoutId && persistLoaded && <CartContent checkoutId={checkoutId}/>}
            </div>
          </div>
        </WidthLimiter>
      </div>
    </div>
    <style jsx>{`
      .cart-spacer {
        height: 41px;
      }
      .cart {
        position: fixed;
        top: 55px; left: 0; right: 0;
        background: rgba(239,245,255, 0.90);
        backdrop-filter: blur(5px);
        min-height: 41px;
        overflow: hidden;
      }
      .animation-wrapper {
        margin-top: -500px;
        max-height: 500px;
        opacity: 0;
        transition: .5s margin .5s ease-in, .2s opacity .2s;
      }
      .cart.open .animation-wrapper {
        margin-top: 0;
        opacity: 1;
        transition: .5s margin ease-out, .6s opacity .6s ease-out;
      }
      @media (hover: hover) {
        .cart:hover .animation-wrapper {
          margin-top: 0;
          opacity: 1;
          transition: .5s margin ease-out, .6s opacity .6s ease-out;
        }
      }

      @media screen and (min-width: 600px) {
        .content {
          display: flex;
          justify-content: space-between;
        }
        .content > div:last-child {
          max-width: 280px;
        }
      }
      .head {
        display: flex;
        justify-content: space-between;
      }
      .content {
        padding-bottom: 10px;
      }

      h3 {
        margin: 0;
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.5em;
        text-align: right;
      }
      h3 span {
        width: 1em;
        height: 1em;
        display: inline-block;
        margin: 0 0.15em;
        transform: translateY(2px)
      }
    `}</style>
  </div>

export default compose(
  withCheckoutCreate,
  withCheckoutId,
  branch( // only wrap with withCheckout if checkoutId is available
    props => !!props.checkoutId,
    withCheckout
  ),
  withState('isOpen', 'setOpen', false),
  lifecycle({
    componentDidUpdate(prevProps) {
      const p = this.props
      createCheckoutIfNeeded(p)
      if (prevProps.checkout && p.checkout && prevProps.checkout.lineItems.edges !== p.checkout.lineItems.edges) {
        if (p.isOpen) clearTimeout(p.isOpen) 
        p.setOpen(isTouchDevice() ? true : setTimeout(() => p.setOpen(false), 3000))
      }
    },
    componentDidMount() {
      createCheckoutIfNeeded(this.props)
    }
  })
)(Cart)

async function createCheckoutIfNeeded(p) {
  if ((!p.checkoutId && p.persistLoaded) || (p.checkout && p.checkout.completedAt)) {
    const mutationResponse = await p.checkoutCreate({
      variables: {
        input: {
          allowPartialAddresses: true,
          shippingAddress: {city: 'Santiago', province: 'RM', country: 'Chile'}
        }
      }
    })
    const checkoutId = mutationResponse.data.checkoutCreate.checkout.id
    p.dispatch(setCheckoutId(checkoutId))
  }
}

function isTouchDevice() {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  var mq = function(query) {
    return window.matchMedia(query).matches;
  }
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }
  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}