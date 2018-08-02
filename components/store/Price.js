import { compose, withHandlers } from 'recompose';
import withCheckoutLineItemsRemove from './withCheckoutLineItemsRemove';
import withCheckoutId from './withCheckoutId';

const Price = ({value}) => 
  <span className='price'>
    ${parseInt(value).toLocaleString('es-ES', {currency: 'CLP'})}
  </span>

export default Price