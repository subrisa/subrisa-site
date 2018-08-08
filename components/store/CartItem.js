import { compose, withHandlers, withState } from 'recompose';
import withCheckoutLineItemsRemove from './withCheckoutLineItemsRemove';
import withCheckoutId from './withCheckoutId';
import Price from './Price';

const CartItem = ({item, handleRemoveClick, removed}) => 
  <div className={`cart-item ${removed && 'removed'}`}>
    <div className='actions'>
      <a onClick={handleRemoveClick}>╳</a>
    </div>
    <div className='title'>
      <span className='qty'>{item.node.quantity}x</span>{item.node.title}
    </div>
    <div><Price value={item.node.variant && item.node.variant.price*item.node.quantity} /></div>
    <style jsx>{`
      .cart-item {
        font-size: 0.75rem;
        margin-bottom: 0.333em;
        display: flex;
        align-items: center;
      }
      .cart-item.removed {
        opacity: 0;
        margin-top: -2em;
        transition: .5s all
      }
      .actions a {
        background: #a2a7b2;
        color: white;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        border-raidus: 1rem;
        border-radius: 1rem;
        text-align: center;
        font-size: .5rem;
        font-weight: bold;
      }
      .qty {
        font-weight: 600;
        margin-right: 0.333em;
      }
      .title {
        font-weight: 300;
        flex: 1;
        margin-left: .75em
      }
      div > div:last-child {
        width: 50px;
        padding-left: 10px;
        text-align: right;
      }
    `}</style>
  </div>

export default compose(
  withState('removed', 'setRemoved', false),
  withCheckoutLineItemsRemove,
  withCheckoutId,
  withHandlers({
    handleRemoveClick: ({
      item,
      checkoutId,
      checkoutLineItemsRemove,
      setRemoved
    }) => async e => {
      setRemoved(true)
      const mutationResult = await checkoutLineItemsRemove({
        variables: {
          checkoutId: checkoutId, 
          lineItemIds:  [
            item.node.id
          ] 
        }
      })
    }
  })
)(CartItem)