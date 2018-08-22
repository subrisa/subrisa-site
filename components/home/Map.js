import { compose, withProps, withState, withHandlers } from "recompose"
import { RichText } from 'prismic-reactjs'
import ResellersMap from "./ResellersMap";

const Map = ({resellers, selected, setSelected, onMarkerClick}) =>
  <div className='map'>
    {selected && 
      <div className='mapInfo' onClick={e=> setSelected(false)}>
        <MapInfo
          reseller={resellers.find(e => e.id == selected)}
        />
      </div>
    }
    <div>
      <ResellersMap
        resellers={resellers}
        onMarkerClick={onMarkerClick}
        selected={selected}
      />
    </div>
    <style jsx>{`
      .map {
        position: relative
      }
      .mapInfo {
        position: absolute;
        top: 5px;
        bottom: 5px;
        left: 5px;
        width: 200px;
        z-index: 1;
        background: rgba(255,255,255,0.9);
        padding: 20px;
        border-radius: 5px;
      }
    `}</style>
  </div>

const MapInfo = ({reseller: {data: {title, description}}}) =>
  <div>
    <h3>{title[0].text}</h3>
    {RichText.render(description)}
    <style jsx>{`
      div {
        font-weight: 300;
      }
      h3 {
        margin-top: 0;
        font-size: 22px;
        font-weight: 300;
      }
    `}</style>
  </div>

export default compose(
  withState('selected', 'setSelected', false),
  withHandlers({
    onMarkerClick: ({setSelected}) => id => {
      setSelected(id)
    }
  })
)(Map)