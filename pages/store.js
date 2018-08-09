import withData from '../lib/apollo'
import Body from 'components/struct/Body'
import Head from 'components/struct/Head'
import Masthead from 'components/struct/Masthead'
import Main from 'components/struct/Main'
import Title from 'components/base/Title'
import ProductList from 'components/store/ProductList';
import Cart from 'components/store/Cart'
import WidthLimiter from '../components/struct/WidthLimiter';
import Breadbrumb from '../components/struct/Breadbrumb';

const Store = (props) =>
  <Body>
    <Head>
      <title>BRISA Tienda Online</title>
      <meta name="title" content="BRISA Tienda Online" />
      <meta name="description" content="Papelillos Brisa enviados directamente a su casa. Compra Online Fácil y Segura, pague con su tarjeta, en Servipag o con Bitcoin!" />
    </Head>
    <Main>
      <Cart />
      <br /><br />
      <h2><Title text='Tienda' color='#7FB8B5' /></h2>
      <WidthLimiter>
        <ProductList />
      </WidthLimiter>
    </Main>
  </Body>

export default withData(Store)
