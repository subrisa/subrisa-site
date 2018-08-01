import withData from '../lib/apollo'
import Body from 'components/struct/Body'
import Head from 'components/struct/Head'
import Masthead from 'components/struct/Masthead'
import Main from 'components/struct/Main'
import Footer from 'components/struct/Footer'
import Title from 'components/base/Title'
import Cart from 'components/store/Cart'
import withProduct from '/components/store/withProduct'
import WidthLimiter from '../components/struct/WidthLimiter';

const StoreProduct = ({product}) =>
  <Body>
    <Head />
    <Masthead showSmall />
    <Main>
      <br /><br /><br /><br /><br />
      <h2><Title text={product.title} color='#85ABA9' /></h2>
      <WidthLimiter>
        <div className='image'><img src={product.images && product.images.edges[0].node.src} /></div>
      </WidthLimiter>
      <Cart />
    </Main>
    <Footer />
  </Body>

export default withData(withProduct(StoreProduct))
