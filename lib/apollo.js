import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
    uri: 'https://brisachile.myshopify.com/api/graphql',
    headers: {
      'X-Shopify-Storefront-Access-Token': 'c2b98ea03528986231d97210da506eec'
    }
  })
}

export default withData(config)