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
import { Link } from '/routes'

const StoreProduct = ({product, loading}) =>
  <Body>
    <Head />
    <Masthead showSmall />
    <Main>
      <Cart />
      <WidthLimiter>
        <br /><br />
        <div className='breadcrumb'>
          <Link route='/'><a>Inicio</a></Link> / <Link route='/tienda'><a>Tienda</a></Link> / <span>Producto</span>
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
        { loading ?
          <span>cargando</span> :
          <ProductDetail {...product} />
        }
      </WidthLimiter>
    </Main>
    <Footer />
  </Body>

export default withData(withRouter(withProduct(StoreProduct)))
