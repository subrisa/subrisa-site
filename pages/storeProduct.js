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
import ProductDetail from '../components/store/ProductDetail';

const StoreProduct = ({product}) =>
  <Body>
    <Head />
    <Masthead showSmall />
    <Main>
      <br /><br /><br /><br /><br />
      <WidthLimiter>
        <ProductDetail {...product} />
      </WidthLimiter>
      <Cart />
    </Main>
    <Footer />
  </Body>

export default withData(withProduct(StoreProduct))
