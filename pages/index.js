import React from 'react'
import { lifecycle, compose } from 'recompose'
import Body from 'components/struct/Body'
import Head from 'components/struct/Head'
import Masthead from 'components/struct/Masthead'
import Main from 'components/struct/Main'
import Footer from 'components/struct/Footer'
import About from 'components/home/About'
import Products from 'components/home/Products'
import Contact from 'components/home/Contact'
import MessengerChat from 'components/home/MessengerChat'
import { getProducts, getHome } from 'lib/backend'

const IndexPage = ({ content }) =>
  <Body>
    <Head>
      <title>BRISA</title>
      <meta name="title" content="BRISA" />
      <meta name="description" content="Papelillos de alta calidad 420% Chileno. Para, Desconéctate y Disfruta su Brisa." />
    </Head>
    <Masthead />
    <Main>
      <About {...content} />
      <Products products={content.products} />
      <Contact {...content} />
    </Main>
    <Footer />
    <MessengerChat />
  </Body>

IndexPage.getInitialProps = async ({ req }) => {
  return { content: await getHome() }
}

export default IndexPage
