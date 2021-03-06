import { compose, withHandlers } from 'recompose';
import withCheckoutLineItemsAdd from './withCheckoutLineItemsAdd'
import { CartIcon } from '../base/Icons';
import { Link } from '/routes'
import withCheckoutId from './withCheckoutId';
import Price from './Price'
const ProductList = ({title, price, images, handle, handleAddToCartClick}) => 
  <div className='root'> 
    <div className='image'>
      <Link route={`/tienda/producto/${handle}`}><a>
        <img src={images[0].src} />
      </a></Link>
    </div>
    <div className='description'>
      <Link route={`/tienda/producto/${handle}`}><a>
        <h2>{title}</h2>
      </a></Link>
      <div className='price'><Price value={price} /></div>
    </div>
    <button type='button' onClick={handleAddToCartClick}>
      <span>+</span><span><CartIcon /></span>
    </button>
    <style jsx>{`
      .root {
        position: relative;
      }
      .image {
        position: relative;
        padding-bottom: 80%;
        width: 100%;
        margin: 0 auto;
      }
      .image img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      h2 {
        margin: 0 0 0.333em;
        font-size: 1rem;
        font-weight: 200;
        min-height: 2.5em;
      }
      .price {
        font-weight: 700;
        font-size: 1.333rem;
        color: #A291BA;
      }
      .root > button {
        position: absolute;
        right: 7px;
        bottom: 0px;
        margin-top: 100%;
        background: ;
        padding: 0.2em 0.3em;
        text-align: center;
        border-radius: 1.5rem;
        line-height: 1.5rem;
        font-size: 1.333rem;
        color: #A291BA;
        fill: #A291BA;
        font-weight: 300;
      }
      .root > button span:first-child {
        transform: translateY(-2px);
        display: inline-block;
      }
      .root > button span:last-child {
        width: 1.333rem;
        margin: 0 0.1em;
        display: inline-block;
        transform: translateY(2px)
      }
      @media only screen and (min-width: 600px) {
        .root > button:hover {
          background: #A291BA;
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
        .root > button {
          right: -7px;
          bottom: 50%;
          transform: translateY(50%)
        }
      }
    `}</style>
  </div>

export default compose(
  withCheckoutLineItemsAdd,
  withCheckoutId,
  withHandlers({
    handleAddToCartClick: ({ checkoutLineItemsAdd, checkoutId, ...product }) => async e => {
      const mutationResult = await checkoutLineItemsAdd({
        variables: {
          checkoutId: checkoutId, 
          lineItems:  [
            { variantId: product.variants[0].node.id, quantity: 1 }
          ] 
        }
      })
    }
  })
)(ProductList)

