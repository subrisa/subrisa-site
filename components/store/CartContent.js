import { compose, withHandlers, lifecycle } from 'recompose';
import withCheckout from './withCheckout';
import withCheckoutCreate from './withCheckoutCreate';
import CartItem from './CartItem';
import withCheckoutLineItemsRemove from './withCheckoutLineItemsRemove';
import Price from './Price';

const CartContent = ({checkoutId, checkout, handleSubmitClick, checkoutLineItemsRemove}) =>
  <div>
    {checkout && checkout.lineItems.edges.length == 0 &&
      <small>No tienes productos en tu carrito.</small>
    }
    {checkout && checkout.lineItems.edges.length > 0 &&
      <>
        <div className='items'>
          {checkout && checkout.lineItems.edges.map(item =>
            <CartItem
              item={item}
              key={item.node.id}
              onRemoveClick={checkoutLineItemsRemove}
            />
          )}
        </div>
        <div className='prices'>
          <div><span>Total:</span><span><Price value={checkout.totalPrice} /></span></div>
          <small>IVA incluido</small>
        </div>
        <form>
          <button type="button" onClick={handleSubmitClick}>Continuar →</button>
        </form>
      </>
    }
    <style jsx>{`
      .prices > div {
        text-align: right;
        font-weight: 300;
      }
      .prices > div > span:last-child {
        font-weight: 700;
        text-align: right;
        width: 6em;
        display: inline-block
      }
      .prices small {
        font-size: 0.75em;
        font-weight: 300;
        text-align: right;
        display: block;
        color: #9d9e9f;
      }
      form {
        text-align: right;
      }
      button {
        width: auto;
        padding-left: 2em;
        padding-right: 2em;
      }
    `}</style>
  </div>

export default compose(
  withCheckout,
  withCheckoutCreate,
  withHandlers({
    handleSubmitClick: props => e => {
      window.location.replace(props.checkout.webUrl)
    }
  })
)(CartContent)