import React from 'react'
import { lifecycle, compose } from 'recompose'
import Body from 'components/struct/Body'
import Head from 'components/struct/Head'
import Main from 'components/struct/Main'
import About from 'components/home/About'
import Products from 'components/home/Products'
import Map from 'components/home/Map'
import Contact from 'components/home/Contact'
import { getHome } from 'lib/backend'

const IndexPage = ({ content }) =>
  <Body>
    <Head>
      <title>BRISA</title>
      <meta name="title" content="BRISA" />
      <meta name="description" content="Papelillos de alta calidad 420% Chileno. Para, Desconéctate y Disfruta su Brisa." />
    </Head>
    <Main>
      <About {...content} />
      <Products products={content.products} />
      <Map {...content} />
      <Contact {...content} />
    </Main>
  </Body>

IndexPage.getInitialProps = async ({ req }) => {
  return { content: await getHome() }
}

export default IndexPage
