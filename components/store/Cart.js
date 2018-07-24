import { compose, lifecycle, withState } from 'recompose';
import WidthLimiter from '../struct/WidthLimiter'
import withCheckoutCreate from './withCheckoutCreate';
import CartContent from './CartContent';

const Cart = ({ checkoutId }) => 
  <WidthLimiter>
    <div className='root'>
      {checkoutId && <CartContent checkoutId={checkoutId}/>}
    </div>
    <style jsx>{`
      .root {
        display: block;
      }
    `}</style>
  </WidthLimiter>

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