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

export default graphql(productList, { alias: 'withProductList' })