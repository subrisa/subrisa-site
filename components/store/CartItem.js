import { compose, withHandlers } from 'recompose';
import withCheckoutLineItemsRemove from './withCheckoutLineItemsRemove';

const CartItem = ({item, handleRemoveClick}) => 
  <div className='root' onClick={handleRemoveClick}>
    <div>{item.node.quantity}x</div>
    <div className='title'>{item.node.title}</div>
    <div>${item.node.variant && item.node.variant.price*item.node.quantity}</div>
    <style jsx>{`
      .root {
        font-size: 0.75rem;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
      }
      .title {
        font-weight: 300;
        flex: 1;
      }
      div > div:first-child {
        width: 2em;
        padding-right: 7px;
      }
      div > div:last-child {
        width: 50px;
        padding-left: 10px;
        text-align: right;
      }
    `}</style>
  </div>

export default compose(
  withCheckoutLineItemsRemove,
  withHandlers({
    handleRemoveClick: ({item, checkoutLineItemsRemove}) => async e => {
      const mutationResult = await checkoutLineItemsRemove({
        variables: {
          checkoutId: localStorage.getItem('checkoutId'), 
          lineItemIds:  [
            item.node.id
          ] 
        }
      })
      console.log(mutationResult)
    }
  })
)(CartItem)