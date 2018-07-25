import { compose, withHandlers } from 'recompose';
import withCheckoutLineItemsAdd from './withCheckoutLineItemsAdd'
import { CartIcon } from '../base/Icons';

const ProductList = ({title, price, images, handleAddToCartClick, ...product}) => 
  <div className='root'>
    <div className='image'><img src={images[0].src} /></div>
    <h2>{title}</h2>
    <div className='price'>${price}</div>
    <a onClick={handleAddToCartClick}>+<span><CartIcon /></span></a>
    <style jsx>{`
      .root {
        position: relative;
      }
      .image {
        position: relative;
        padding-bottom: 100%;
      }
      .image > img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      h2 {
        margin: 0 0 0.333em;
      }
      .price {
        font-weight: 900;
        font-size: 1.33rem;
      }
      a {
        position: absolute;
        right: 10px;
        bottom: 0px;
        background: ;
        padding: 0.25em 0.5em;
        text-align: center;
        border-radius: 1.5em;
        line-height: 1em;
        font-size: 1em;
        color: rgb(132, 120, 148);
        fill: rgb(132, 120, 148);
        display: flex;
      }
      a:hover {
        background: rgb(132, 120, 148);
        color: white;
        fill: white;
      }
      a span {
        width: 1em;
        height: 1em;
        padding-left: 0.2em;
      }
    `}</style>
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

