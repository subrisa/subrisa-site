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
          <div><span>Entrega:</span><span>Gratis</span></div>
          <div><span>Total:</span><span>${checkout.totalPrice}</span></div>
          <small>IVA incluido.</small>
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
        width: 2.5em;
        padding-right: 7px;
      }
      .title {
        font-weight: 300;
      }
      .items > div > div:last-child {
        width: 50px;
        padding-left: 10px;
        text-align: right;
      }
      .prices {
        margin: 1em  0 0.5em 0;
      }
      .prices > div {
        text-align: right;
        font-weight: 300;
      }
      .prices > div > span:last-child {
        font-weight: 700;
        text-align: right;
        width: 40%;
        display: inline-block
      }
      .prices small {
        font-size: 0.75em;
        font-weight: 300;
        text-align: right;
        display: block;
      }
    `}</style>
  </div>

export default compose(
  withCheckout
)(CartContent)