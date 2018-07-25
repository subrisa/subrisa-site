import { compose, lifecycle, withState } from 'recompose';
import WidthLimiter from '../struct/WidthLimiter'
import withCheckoutCreate from './withCheckoutCreate';
import CartContent from './CartContent';
import { CartIcon } from '../base/Icons';

const Cart = ({ checkoutId }) => 
  <div className='root'>
    <h3><CartIcon /></h3>
    {checkoutId && <CartContent checkoutId={checkoutId}/>}
    <style jsx>{`
      h3 {
        width: 65px;
        margin: 3em auto 1.5em;
        fill: #85ABA9;
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