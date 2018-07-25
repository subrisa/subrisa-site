import { compose, mapProps, withHandlers } from 'recompose';
import WidthLimiter from '../struct/WidthLimiter'
import withProductList from './withProductList'
import withCheckoutLineItemsAdd from './withCheckoutLineItemsAdd';
import ProductTeaser from './ProductTeaser';

const ProductList = ({products, loading, handleAddToCartClick}) => 
  products ? 
    <WidthLimiter>
      <div className='root'>
        {products.map(product => <ProductTeaser {...product} />)}
      </div>
      <style jsx>{`
        @media only screen and (min-width: 600px) {
          .root {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 1em;
            grid-row-gap: 2em;
          }
        }
        @media only screen and (min-width: 760px) {
          .root {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `}</style>
    </WidthLimiter>:
    <div>Cargando...</div>

export default compose(
  withProductList,
  withCheckoutLineItemsAdd,
)(ProductList)
