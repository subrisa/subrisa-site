import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const productList = gql`
{
  shop {
    products(first: 20, sortKey: TITLE) {
      edges {
        node {
          id
          title
          handle
          images(first: 1, maxWidth: 600) {
            edges {
              node {
                src
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                price
              }
            }
          }
        }
      }
    }
  }
}
`
const normalizeImage = ({ node: { src } }) => ({ src })

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

export default graphql(productList, {
  alias: 'withProductList',

  props: props => props.data.shop ? normalizeProps(props) : props
})