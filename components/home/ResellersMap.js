import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const ResellersMap = ({resellers, selected, onMarkerClick}) =>
  <GoogleMap
    defaultZoom={6}
    defaultCenter={{ lat: -31.7530566, lng: -70.6353693 }}
    defaultOptions={{mapTypeControl: false}}
  >
    {resellers.map(({ id, data: { location, title } }) =>
      <Marker
        icon={{
          url: "/static/marker.png",
          scaledSize: selected === id ? new google.maps.Size(48, 52) : new google.maps.Size(32, 35)
        }}
        position={{ lat: location.latitude, lng: location.longitude }}
        onClick={a=> onMarkerClick(id)}
        key={id}
      />
    )}
  </GoogleMap>

export default compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC46XBb1KWbPeXsGYzIbOiEc8gaGWCSWuk&v=3.exp",
    loadingElement: <div style={{ height: `400px` }} />,
    containerElement: <div />,
    mapElement: <div style={{ height: `400px` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(ResellersMap)