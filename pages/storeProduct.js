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
import Breadcrumb from '/components/struct/Breadbrumb';

const StoreProduct = ({product, loading}) =>
  <Body>
    <Head>
      <title>{`BRISA Tienda Online - ${product.title}`}</title>
      <meta name="title" content={`BRISA Tienda Online - ${product.title}`} />
      <meta name="description" content="Papelillos Brisa enviados directamente a su casa. Compra Online Fácil y Segura, pague con su tarjeta, en Servipag o con Bitcoin!" />
    </Head>
    <Main>
      <Cart />
      <br /><br />
      <Breadcrumb />
      <WidthLimiter>
        { loading ?
          <span>cargando</span> :
          <ProductDetail {...product} />
        }
      </WidthLimiter>
    </Main>
  </Body>

export default withData(withRouter(withProduct(StoreProduct)))
