const routes = require('next-routes')

module.exports = routes() 
  .add('index', '/', 'index')
  .add('store', '/tienda', 'store')
  .add('storeProduct', '/tienda/producto/:slug', 'storeProduct')
  