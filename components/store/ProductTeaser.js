import { compose, withHandlers } from 'recompose';
import withCheckoutLineItemsAdd from './withCheckoutLineItemsAdd'
import { CartIcon } from '../base/Icons';

const ProductList = ({title, price, images, handleAddToCartClick, ...product}) => 
  <div className='root'>
    <div className='image'><img src={images[0].src} /></div>
    <div className='description'>
      <h2>{title}</h2>
      <div className='price'>${price}</div>
    </div>
    <a onClick={handleAddToCartClick}>+<span><CartIcon /></span></a>
    <style jsx>{`
      .root {
        position: relative;
      }
      .image {
        position: relative;
        padding-bottom: 90%;
        width: 90%;
        margin: 0 auto;
      }
      .image > img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      h2 {
        margin: 0 0 0.333em;
        font-weight: 300;
        min-height: 2.5em;
      }
      .price {
        font-weight: 700;
        font-size: 1.333em;
        
      }
      a {
        position: absolute;
        right: 5px;
        bottom: -5px;
        margin-top: 100%;
        background: ;
        padding: 0.2em 0.3em;
        text-align: center;
        border-radius: 1.5em;
        line-height: 1em;
        font-size: 1.5em;
        color: rgb(132, 120, 148);
        fill: rgb(132, 120, 148);
        font-weight: 300;
      }
      a span {
        width: 0.85em;
        height: 1em;
        padding: 0 0.1em;
        display: inline-block;
        transform: translateY(1px)
      }
      @media only screen and (min-width: 600px) {
        a:hover {
          background: rgb(132, 120, 148);
          color: white;
          fill: white;
        }
      }
      @media only screen and (max-width: 600px) {
        .root {
          display: flex;
          align-items: center;
        }
        .image {
          flex: 0 0 38vw;
          min-width: 38vw;
          height: 40vw;
          padding: 0;
          margin-right: .5em;
        }
        .description {
          margin-right: 3em;
          flex: 1;
        }
        a {
          right: -5px;
          bottom: 50%;
          transform: translateY(50%)
        }
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
