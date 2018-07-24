import { compose, mapProps, withHandlers } from 'recompose';
import WidthLimiter from '../struct/WidthLimiter'
import withProductList from './withProductList'
import withCheckoutLineItemsAdd from './withCheckoutLineItemsAdd';
import ProductTeaser from './ProductTeaser';

const ProductList = ({products, loading, handleAddToCartClick}) => 
  <WidthLimiter>
    <div className='root'>
      {products.map(product => <ProductTeaser {...product} />)}
    </div>
    <style jsx>{`
      .root {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 2em;
        grid-row-gap: 2em;
      }
    `}</style>
  </WidthLimiter>

const normalizeProduct = ({
  node: {
     images,
     variants,
     ...node
  }
}) => ({
  ...node,
  price: variants.edges[0].node.price,
  variants: variants.edges,
  images: images.edges.map(normalizeImage)
})

const normalizeImage = ({ node: { src } }) => ({ src })

const normalizeProps = ({
  data: {
    loading,
    shop: { products }
  }
}) =>
({
  loading,
  products: products.edges.map(normalizeProduct)
})

export default compose(
  withProductList,
  withCheckoutLineItemsAdd,
  mapProps(normalizeProps),
)(ProductList)
