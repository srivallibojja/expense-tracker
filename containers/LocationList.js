import { connect } from "react-redux";
import { getLocationByName } from "../actions/ProfileCareer";
import { LocationList } from "../components/LocationList";

const mapStateToProps = (state /*, ownProps*/) => ({
  locations: state.ProfileCareerReducer.locations,
});

const mapDispatchToProps = (dispatch) => ({
  getLocationByName: (startsWith) => dispatch(getLocationByName(startsWith)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
