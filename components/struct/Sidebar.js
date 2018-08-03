import WidthLimiter from "./WidthLimiter";

const Sidebar = ({children}) =>
  <WidthLimiter>
    <div className='root'>
      <div>{children[0]}</div>
      <div>{children[1]}</div>
      <style jsx>{`
        .root {
        }
        @media only screen and (min-width: 600px) {
          .root {
            display: flex;
          }
          .root > div:first-child {
            flex: 1;
            display: flex;
            padding-right: 3.33rem;
          }
          .root > div:last-child {
            flex: 0 0 12em;
          }
        }
      `}</style>
    </div>
  </WidthLimiter>

export default Sidebar
