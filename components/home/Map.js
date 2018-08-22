import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = ({resellers}) =>
  <div>
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: -35.1169026, lng: -71.0672386 }}
    >
      {resellers.map(({ id, data: { location } }) =>
        <Marker position={{ lat: location.latitude, lng: location.longitude }} />
      )}
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