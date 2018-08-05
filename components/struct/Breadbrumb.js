import { colors } from '/lib/style'
import { Link } from '/routes'
import WidthLimiter from "./WidthLimiter";
import { withRouter } from 'next/router'

const BreadcrumbLink = ({ path }) => {
  switch(path) {
    case '/':
      return <Info text={text} />;
    case 'warning':
      return <Warning text={text} />;
    case 'error':
      return <Error text={text} />;
    default:
      return null;
  }
}

const Breadcrumb = ({router}) =>
  <div className='breadcrumb'>
    <WidthLimiter>
      <Link route='/'><a>Inicio</a></Link>
      <Link route='/tienda'><a>Tienda</a></Link>
      <span>Producto</span>
    </WidthLimiter>
    <style jsx>{`
      .breadcrumb {
        font-weight: 300;
        color: ${colors.abbey};
        font-size: 0.75rem;
        height: 41px;
        line-height: 41px;
      }
      a:after {
        content: " / "
      }
      span {
        color: ${colors.ashes}
      }
    `}</style>
  </div>

export default withRouter(Breadcrumb)
