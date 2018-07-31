import { compose, mapProps, withHandlers } from 'recompose';
import WidthLimiter from '../struct/WidthLimiter'
import withProductList from './withProductList'
import withCheckoutLineItemsAdd from './withCheckoutLineItemsAdd';
import ProductTeaser from './ProductTeaser';

const ProductList = ({products, loading, handleAddToCartClick}) => 
  products ? 
    <div className='root'>
      {products.map(product => <ProductTeaser {...product} />)}
      <style jsx>{`
        @media only screen and (min-width: 600px) {
          .root {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 1.333em;
            grid-row-gap: 3em;
            margin-bottom: 3em;
            width: 100%;
          }
        }
        @media only screen and (min-width: 760px) {
          .root {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `}</style>
    </div> :
    <div>Cargando...</div>

export default compose(
  withProductList,
  withCheckoutLineItemsAdd,
)(ProductList)
