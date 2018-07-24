import { compose, withHandlers } from 'recompose';
import withCheckoutLineItemsAdd from './withCheckoutLineItemsAdd'

const ProductList = ({title, price, images, handleAddToCartClick, ...product}) => 
  <div>
    <div><img src={images[0].src} /></div>
    <div>{title}</div>
    <div>${price}</div>
    <a onClick={handleAddToCartClick}>add to cart</a>
  </div>

export default compose(
  withCheckoutLineItemsAdd,
  withHandlers({
    handleAddToCartClick: ({ checkoutLineItemsAdd, ...product }) => async e => {
      const mutationResult = await checkoutLineItemsAdd({
        variables: {
          checkoutId: localStorage.getItem('checkoutId'), 
          lineItems:  [
            {variantId: product.variants[0].node.id, quantity: 1 }
          ] 
        }
      })
      console.log(mutationResult)
    }
  })
)(ProductList)

