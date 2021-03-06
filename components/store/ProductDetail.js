import { compose, withHandlers, withState } from 'recompose';
import withCheckoutLineItemsAdd from './withCheckoutLineItemsAdd'
import withCheckoutId from './withCheckoutId';
import Price from './Price';

const ProductDetail = ({
  title,
  images,
  descriptionHtml,
  handleAddToCartClick,
  variants,
  isLoading
}) => 
  <div className='product-detail'>
    <div className='content'>
      <div className='image'><img src={images && images.edges[0].node.src} /></div>
      <div>
        <h1>{title}</h1>
        <h2><Price value={variants && variants.edges[0].node.price} /></h2>
        <form>
          <button type="button" onClick={handleAddToCartClick} disabled={isLoading}>
            {!isLoading ? '＋ Añadir al carrito' : 'Cargando..' }
          </button>
        </form>
        <div className="description">
          <div dangerouslySetInnerHTML={{__html: descriptionHtml}} />
        </div>
      </div>
    </div>
    <style jsx>{`
      @media screen and (min-width: 600px) {
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
      }
      h1 {
        font-size: 1.75rem;
        font-weight: 300;
        margin-bottom: 0;
      }
      h2 {
        font-weight: 700;
        font-size: 1.75rem;
        color: #A291BA;
        margin-top: 0;
      }
      button {
        background-image: none;
      }
      .description {
        margin-top: 1em;
      }
    `}</style>
  </div>

export default compose(
  withState('isLoading', 'setLoading', false),
  withCheckoutLineItemsAdd,
  withCheckoutId,
  withHandlers({
    handleAddToCartClick: ({
      checkoutLineItemsAdd,
      checkoutId,
      setLoading,
      ...product
    }) => async e => {
      setLoading(true)
      const mutationResult = await checkoutLineItemsAdd({
        variables: {
          checkoutId: checkoutId, 
          lineItems:  [
            { variantId: product.variants.edges[0].node.id, quantity: 1 }
          ] 
        }
      })
      setLoading(false)
    }
  })
)(ProductDetail)

