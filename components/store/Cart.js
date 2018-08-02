import { compose, lifecycle, branch } from 'recompose'
import withCheckoutCreate from './withCheckoutCreate'
import { setCheckoutId } from '/store'
import CartContent from './CartContent'
import { CartIcon } from '../base/Icons'
import WidthLimiter from '../struct/WidthLimiter'
import withCheckoutId from './withCheckoutId'
import withCheckout from './withCheckout'

const Cart = ({ checkoutId, persistLoaded, checkout }) => 
  <div className='cart'>
    <WidthLimiter>
      <div className='head'>
        <h3>Hola, Visitante</h3>
        <h3>{checkout && checkout.lineItems.edges.length}<span><CartIcon /></span>CARRO</h3>
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
    <style jsx>{`
      .cart {
        position: fixed;
        top: 55px; left: 0; right: 0;
        background: rgba(239,245,255, 0.92);
        backdrop-filter: blur(10px);
        min-height: 41px;
        overflow: hidden;
      }
      .animation-wrapper {
        margin-top: -500px;
        max-height: 500px;
        overflow-y: scroll;
        opacity: 0;
        transition: .7s margin .3s ease-in, .3s opacity;
      }
      .cart:hover .animation-wrapper {
        margin-top: 0;
        opacity: 1;
        transition: .7s margin ease-out, .7s opacity .6s ease-out;
      }
      .cart .head,
      .cart .content {
        display: flex;
        justify-content: space-between;
      }
      .cart .content {
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
        margin-right: 0.2em;
        transform: translateY(3px)
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
  lifecycle({
    async componentDidUpdate() {
      const p = this.props
      if ((!p.checkoutId && p.persistLoaded) || (p.checkout.completedAt)) {
        const mutationResponse = await this.props.checkoutCreate({
          variables: { 
            input: {
              allowPartialAddresses: true,
              shippingAddress: {city: 'Santiago', province: 'RM', country: 'Chile'}
            }
          }
        })
        const checkoutId = mutationResponse.data.checkoutCreate.checkout.id
        this.props.dispatch(setCheckoutId(checkoutId))
      }
    }
  })
)(Cart)