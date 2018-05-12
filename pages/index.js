import React from 'react'
import Body from 'components/struct/Body'
import Head from 'components/struct/Head'
import Masthead from 'components/struct/Masthead'
import Main from 'components/struct/Main'
import Footer from 'components/struct/Footer'
import About from 'components/home/About'
import Products from 'components/home/Products'
import News from 'components/home/News'
import Contact from 'components/home/Contact'

const IndexPage = () =>
  <Body>
    <Head />
    <Masthead />
    <Main>
      <About />
      <Products />
      <Contact />
    </Main>
    <Footer />
  </Body>

export default IndexPage
