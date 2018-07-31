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
import withProduct from '/components/store/withProduct'

const StoreProduct = ({product}) =>
  <Body>
    <Head />
    <Masthead showSmall />
    <Main>
      <br /><br /><br />
      <h2><Title text={product.title} color='#85ABA9' /></h2>
      <Sidebar>
        <div>
          <div className='image'><img src={product.images && product.images.edges[0].node.src} /></div>
        </div>
        <Cart />
      </Sidebar>
    </Main>
    <Footer />
  </Body>

export default withData(withProduct(StoreProduct))
