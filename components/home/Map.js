import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer"

const Map = ({resellers}) =>
  <div>
    <GoogleMap
      defaultZoom={6}
      defaultCenter={{ lat: -31.7530566, lng: -70.6353693 }}
    >
      <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
        {resellers.map(({ id, data: { location } }) =>
          <Marker position={{ lat: location.latitude, lng: location.longitude }} />
        )}
      </MarkerClusterer>
    </GoogleMap>
  </div>

export default compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC46XBb1KWbPeXsGYzIbOiEc8gaGWCSWuk&v=3.exp",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(Map)