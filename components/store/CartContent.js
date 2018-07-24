import { compose } from 'recompose';
import withCheckout from './withCheckout';

const Cart = ({checkout}) => 
  <div>
    { checkout && checkout.lineItems.edges.map(item =>
      <div>
        {item.node.title} - {item.node.quantity}
      </div>
    )}
    <div>{ checkout && checkout.totalPrice}</div>
    <a href={checkout && checkout.webUrl}>Pagar</a>
  </div>

export default compose(
  withCheckout
)(Cart)