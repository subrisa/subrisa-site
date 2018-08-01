import { compose, lifecycle, withState } from 'recompose';
import withCheckoutCreate from './withCheckoutCreate';
import CartContent from './CartContent';
import { CartIcon } from '../base/Icons';
import WidthLimiter from '../struct/WidthLimiter';

const Cart = ({ checkoutId }) => 
  <div className='cart'>
    <WidthLimiter>
      <div className='head'>
        <h3>Hola, Visitante</h3>
        <h3><span><CartIcon /></span>CARRO</h3>
      </div>
    </WidthLimiter>
    <WidthLimiter>
      <div className='content'>
        <div />
        <div>
          {checkoutId && <CartContent checkoutId={checkoutId}/>}
        </div>
      </div>
    </WidthLimiter>
    <style jsx>{`
      .cart {
        position: fixed;
        top: 55px; left: 0; right: 0;
        background: rgba(241,245,253, 0.92);
        backdrop-filter: blur(10px);
        height: 41px;
        overflow: hidden;
      }
      .cart:hover {
        height: auto;
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
  withState('checkoutId', 'setCheckoutId', false),
  withCheckoutCreate,
  lifecycle({
    async componentDidMount() {
      const localStorageCheckoutId = localStorage.getItem('checkoutId')
      if (localStorageCheckoutId) return this.props.setCheckoutId(localStorageCheckoutId)
      const mutationResponse = await this.props.checkoutCreate({
        variables: { 
          input: {
            allowPartialAddresses: true,
            shippingAddress: {city: 'Santiago', province: 'RM', country: 'Chile'}
          }
        }
      })
      this.props.setCheckoutId(mutationResponse.data.checkoutCreate.checkout.id)
      localStorage.setItem('checkoutId', mutationResponse.data.checkoutCreate.checkout.id)
      console.log('Created checkout', mutationResponse.data.checkoutCreate.checkout.id)
    }
  })
)(Cart)