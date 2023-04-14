import { connect } from "react-redux";
import { getMajorByName } from "../actions/ProfileEducationDetails";
import { MajorList } from "../components/MajorList";

const mapStateToProps = (state /*, ownProps*/) => ({
  major: state.ProfileEducationDetailsReducer.major,
});

const mapDispatchToProps = (dispatch) => ({
  getMajorByName: (startsWith) => dispatch(getMajorByName(startsWith)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MajorList);
