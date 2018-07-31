const routes = require('next-routes')

module.exports = routes() 
  .add('store', '/tienda', 'store')
  .add('storeProduct', '/tienda/producto/:slug', 'storeProduct')
  