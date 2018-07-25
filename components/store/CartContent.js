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
              <div className='title'>{item.node.title}</div>
              <div>${item.node.variant.price*item.node.quantity}</div>
            </div>
          )}
        </div>
        <div className='prices'>
          <div><span>Subtotal:</span><span>${checkout.totalPrice}</span></div>
        </div>
        <form><button href={checkout.webUrl}>Comprar</button></form>
      </>
    }
    <style jsx>{`
      .items > div {
        font-size: 0.75rem;
        margin: 0.5rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .items > div > div:first-child {
        width: 2.2em;
        padding-right: 5px;
      }
      .title {
        
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
      .prices > div > span:last-child {
        font-weight: 700;
      }
    `}</style>
  </div>

export default compose(
  withCheckout
)(CartContent)