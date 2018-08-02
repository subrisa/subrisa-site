
import App, {Container} from 'next/app'
import withRedux from "next-redux-wrapper"
import AgeVerification from "/components/home/AgeVerification"
import { Provider } from 'react-redux'
import { makeStore } from '/store'

class MyApp extends App {
  render () {
    const {Component, pageProps, store} = this.props
    return (
      <Container>
        <Provider store={store}>
          <AgeVerification>
            <Component {...pageProps} />
          </AgeVerification>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(MyApp)