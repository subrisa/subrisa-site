import withData from '../lib/apollo'
import Body from 'components/struct/Body'
import Head from 'components/struct/Head'
import Masthead from 'components/struct/Masthead'
import Main from 'components/struct/Main'
import Footer from 'components/struct/Footer'
import MessengerChat from 'components/home/MessengerChat'
import Title from 'components/base/Title'
import ProductList from 'components/store/ProductList';
import Cart from 'components/store/Cart'
import Sidebar from '../components/struct/Sidebar';
import WidthLimiter from '../components/struct/WidthLimiter';
import Breadbrumb from '../components/struct/Breadbrumb';

const Store = (props) =>
  <Body>
    <Head />
    <Masthead showSmall />
    <Main>
      <Cart />
      <br /><br />
      <h2><Title text='Tienda' color='#7FB8B5' /></h2>
      <WidthLimiter>
        <ProductList />
      </WidthLimiter>
    </Main>
    <Footer />
  </Body>

export default withData(Store)
