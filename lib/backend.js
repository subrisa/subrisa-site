import Prismic from 'prismic-javascript'

const getAllDocuments = () => {
  Prismic.api("https://brisa.cdn.prismic.io/api/v2").then(function(api) {
    return api.query("")
  }).then(function(response) {
    console.log("Documents: ", response.results)
  }, function(err) {
    console.log("Something went wrong: ", err)
  })
}

export async function getHome() {
  const api = await Prismic.api("https://brisa.cdn.prismic.io/api/v2")
  const response = await api.getSingle('home_page',
    { fetchLinks: ['product.name', 'product.image', 'product.detail_image','product.description', 'product.technical_data'] }
  )
  const products = await getProducts()
  const orderedProducts = response.data.products.map(({ product: { id } }) =>
    products.find(product => product.id === id)
  )
  return { ...response.data, products: orderedProducts }
}

export async function getProducts() {
  const api = await Prismic.api("https://brisa.cdn.prismic.io/api/v2")
  const response = await api.query(
    Prismic.Predicates.at('document.type', 'product')
  )
  return response.results
}
