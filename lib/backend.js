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

export async function getProducts() {
  const api = await Prismic.api("https://brisa.cdn.prismic.io/api/v2")
  const response = await api.query(
    Prismic.Predicates.at('document.type', 'product'),
    { orderings : '[my.product.name]' }
  )
  return response.results
}
