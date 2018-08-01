import { compose, withHandlers } from 'recompose';
import withCheckoutLineItemsAdd from './withCheckoutLineItemsAdd'
import { CartIcon } from '../base/Icons';
import { Link } from '/routes'

const ProductDetail = ({title, price, images, descriptionHtml, handleAddToCartClick, ...product}) => 
  <div className='product-detail'>
    <div className='content'>
      <div className='image'><img src={images && images.edges[0].node.src} /></div>
      <div>
        <h1>{title}</h1>
        <form><button type="button">Anadir ao carro</button></form>
        <div dangerouslySetInnerHTML={{__html: descriptionHtml}} />
      </div>
    </div>
    <style jsx>{`
      .content {
        display: flex;
        margin-bottom: 2rem;
      }
      .content > div {
        flex: 1;
      }
      .content > div:first-child {
        margin-right: 1rem;
      }
      .content > div:last-child {
        margin-left: 1rem;
      }
      h1 {
        font-size: 1.75rem;
        font-weight: 300;
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
)(ProductDetail)

