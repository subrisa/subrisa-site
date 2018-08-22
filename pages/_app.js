
import App, {Container} from 'next/app'
import Router from "next/router"
import withRedux from "next-redux-wrapper"
import withGA from "next-ga"
import { compose } from 'recompose'
import { Provider } from 'react-redux'
import { makeStore } from '/store'

import AgeVerification from "/components/home/AgeVerification"
import Masthead from '/components/struct/Masthead'
import MessengerChat from '/components/home/MessengerChat'
import Footer from  '/components/struct/Footer'
import Head from '/components/struct/Head'

class MyApp extends App {
  render () {
    const {Component, pageProps, store, router} = this.props
    return (
      <Container>
        <Provider store={store}>
          <AgeVerification>
            <Head />
            <Masthead showSmall={router.pathname !== '/'} />
            <Component {...pageProps} />
            <Footer />
            <MessengerChat />
          </AgeVerification>
        </Provider>
      </Container>
    )
  }
}

export default compose(
  withRedux(makeStore),
  withGA("UA-116955640-1", Router)
)(MyApp)