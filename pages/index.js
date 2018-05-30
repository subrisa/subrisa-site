import React from 'react'
import { lifecycle, compose } from 'recompose'
import Body from 'components/struct/Body'
import Head from 'components/struct/Head'
import Masthead from 'components/struct/Masthead'
import Main from 'components/struct/Main'
import Footer from 'components/struct/Footer'
import AgeVerification from 'components/home/AgeVerification'
import About from 'components/home/About'
import Products from 'components/home/Products'
import News from 'components/home/News'
import Contact from 'components/home/Contact'
import MessengerChat from 'components/home/MessengerChat'
import { getProducts, getHome } from 'lib/backend'

const IndexPage = ({ products, content }) =>
  <Body>
    <Head />
    <AgeVerification>
      <Masthead />
      <Main>
        <About {...content} />
        <Products products={content.products} />
        <Contact />
      </Main>
      <Footer />
      <MessengerChat />
    </AgeVerification>
  </Body>

IndexPage.getInitialProps = async ({ req }) => {
  return { products: await getProducts(), content: await getHome() }
}

export default IndexPage
