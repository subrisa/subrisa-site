import React from 'react'
import { lifecycle, compose } from 'recompose'
import Body from 'components/struct/Body'
import Head from 'components/struct/Head'
import Masthead from 'components/struct/Masthead'
import Main from 'components/struct/Main'
import Footer from 'components/struct/Footer'
import About from 'components/home/About'
import Products from 'components/home/Products'
import News from 'components/home/News'
import Contact from 'components/home/Contact'
import MessengerChat from 'components/home/MessengerChat'
import { getProducts } from 'lib/backend'

const IndexPage = ({ products }) =>
  <Body>
    <Head />
    <Masthead />
    <Main>
      <About />
      <Products products={products} />
      <Contact />
    </Main>
    <Footer />
    <MessengerChat />
  </Body>

IndexPage.getInitialProps = async ({ req }) => {
  return { products: await getProducts() }
}

export default IndexPage
