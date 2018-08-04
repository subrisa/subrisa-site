/*
Get checkout ID from Redux store. 
Also pass down `dispatch` method used to *set* checkout ID
*/
import { connect } from 'react-redux';

const withAgeVerified = connect(
  ({ ageVerified, persistLoaded }) => ({ ageVerified, persistLoaded }),
)

export default withAgeVerified