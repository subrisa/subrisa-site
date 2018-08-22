import withData from '../lib/apollo'
import Head from 'next/head'
import Main from 'components/struct/Main'
import Title from 'components/base/Title'
import ProductList from 'components/store/ProductList';
import Cart from 'components/store/Cart'
import WidthLimiter from '../components/struct/WidthLimiter';
import Breadbrumb from '../components/struct/Breadbrumb';

const Store = (props) =>
  <Main>
    <Head>
      <title>BRISA Tienda Online</title>
      <meta name="title" content="BRISA Tienda Online" />
      <meta name="description" content="Papelillos Brisa enviados directamente a su casa. Compra Online Fácil y Segura, pague con su tarjeta, en Servipag o con Bitcoin!" />
    </Head>
    <Cart />
    <br /><br />
    <h2><Title text='Tienda' color='#7FB8B5' /></h2>
    <WidthLimiter>
      <ProductList />
    </WidthLimiter>
  </Main>

export default withData(Store)
