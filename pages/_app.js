
import App, {Container} from 'next/app'
import withRedux from "next-redux-wrapper"
import { Provider } from 'react-redux'
import { makeStore } from '/store'

import AgeVerification from "/components/home/AgeVerification"
import Masthead from '/components/struct/Masthead'
import MessengerChat from '/components/home/MessengerChat'
import Footer from  '/components/struct/Footer'

class MyApp extends App {
  render () {
    const {Component, pageProps, store, router} = this.props
    return (
      <Container>
        <Provider store={store}>
          <AgeVerification>
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

export default withRedux(makeStore)(MyApp)