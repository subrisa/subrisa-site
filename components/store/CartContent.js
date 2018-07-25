import { compose } from 'recompose';
import withCheckout from './withCheckout';

const CartContent = ({checkout}) => 
  <div>
    { checkout &&
      <>
        <div className='items'>
          {checkout && checkout.lineItems.edges.map(item =>
            <div>
              <div>{item.node.quantity}x</div>
              <div>{item.node.title}</div>
              <div>${item.node.variant.price}</div>
            </div>
          )}
        </div>
        <div className='prices'>
          <div><span>Subtotal:</span><span><b>${checkout.totalPrice}</b></span></div>
        </div>
        <form><button href={checkout.webUrl}>Comprar</button></form>
      </>
    }
    <style jsx>{`
      .items > div {
        font-size: 0.75rem;
        margin: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .items > div > div:first-child {
        width: 2.2em;
        padding-right: 5px;
      }
      .items > div > div:last-child {
        width: 40px;
        padding-left: 10px;
        font-weight: bold;
      }
      .prices {
        margin: 1em  0 0.5em 0;
      }
      .prices > div {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>

export default compose(
  withCheckout
)(CartContent)