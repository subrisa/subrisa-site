import withData from '../lib/apollo'
import { withRouter } from 'next/router'
import Body from 'components/struct/Body'
import Head from 'components/struct/Head'
import Masthead from 'components/struct/Masthead'
import Main from 'components/struct/Main'
import Footer from 'components/struct/Footer'
import Cart from 'components/store/Cart'
import withProduct from '/components/store/withProduct'
import WidthLimiter from '../components/struct/WidthLimiter';
import ProductDetail from '../components/store/ProductDetail';
import { colors } from '/lib/style'

const StoreProduct = ({product}) =>
  <Body>
    <Head />
    <Masthead showSmall />
    <Main>
      <Cart />
      <WidthLimiter>
        <br /><br />
        <div className='breadcrumb'>
          <a>Inicio</a> / <a>Tienda</a> / <span>Producto</span>
          <style jsx>{`
            .breadcrumb {
              font-weight: 300;
              color: ${colors.abbey};
              font-size: 0.75rem;
              height: 41px;
              line-height: 41px;
            }
            span {
              color: ${colors.ashes}
            }
          `}</style>
        </div>
        <ProductDetail {...product} />
      </WidthLimiter>
    </Main>
    <Footer />
  </Body>

export default withData(withRouter(withProduct(StoreProduct)))
