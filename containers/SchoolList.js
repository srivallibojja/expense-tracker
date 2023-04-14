import { connect } from "react-redux";
import { SchoolList } from "../components/SchoolList";
import { getSchoolByName } from "../actions/ProfileVerification";

const mapStateToProps = (state /*, ownProps*/) => ({
  school_info: state.ProfileVerificationReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getSchoolByName: (startsWith) => dispatch(getSchoolByName(startsWith)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SchoolList);
