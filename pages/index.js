import React from 'react'
import Head from 'next/head'
import Main from 'components/struct/Main'
import About from 'components/home/About'
import Products from 'components/home/Products'
import Map from 'components/home/Map'
import Contact from 'components/home/Contact'
import { getHome } from 'lib/backend'

const IndexPage = ({ content }) =>
    <Main>
      <Head>
        <title>BRISA</title>
        <meta name="title" content="BRISA" />
        <meta name="description" content="Papelillos de alta calidad 420% Chileno. Para, Desconéctate y Disfruta su Brisa." />
      </Head>
      <About {...content} />
      <Products products={content.products} />
      <Map {...content} />
      <Contact {...content} />
    </Main>

IndexPage.getInitialProps = async ({ req }) => {
  return { content: await getHome() }
}

export default IndexPage
