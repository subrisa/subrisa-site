import { compose, lifecycle, withState } from 'recompose';
import WidthLimiter from '../struct/WidthLimiter'
import withCheckoutCreate from './withCheckoutCreate';
import CartContent from './CartContent';
import { CartIcon } from '../base/Icons';

const Cart = ({ checkoutId }) => 
  <div className='root'>
    <h3><span><CartIcon /></span>CARRO</h3>
    {checkoutId && <CartContent checkoutId={checkoutId}/>}
    <style jsx>{`
      h3 {
        margin: 2em 0 1em 0;
        fill: #85ABA9;
        color: #85ABA9;
        font-size: 1.5em;
        font-weight: 300;
        line-height: 1em;
        text-align: center;
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